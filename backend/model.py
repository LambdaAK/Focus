from openai import OpenAI
import json5 as json
import openai

query = ""

config = json.load(open("./config.json", "r"))

client = OpenAI(api_key = config['openai_api_key'])

openai.api_key = config['openai_api_key']


def make_task(id: int, due: str, duration: str):
  return {
    "id": id,
    "due_date": due,
    "duration": duration
  }


task1 = make_task(1, "6-1-2022 8:00pm", "5 hours")
task2 = make_task(2, "5-31-2022 10:00pm", "1 hour")
# make more
task3 = make_task(3, "5-31-2022 11:00pm", "1 hour")
# vary the properties
task4 = make_task(4, "5-31-2022 10:00pm", "2 hours")


def make_prompt(tasks):
  s = """

  # Your job

  Your job is to create a schedule for the following tasks. Each task has a due date and a duration. You must schedule each task
  in a way that they all get done before their due date. You can only work on one task at a time. You can only work on a task during
  working hours, which are from 9am to 5pm. You can only work on a task for a maximum of 2 hours at a time, before a 15 minute break is required.

  # Output format

  Your output should be a list of tasks identified by the task id, and the time at which you will start working on the task.

    Here is an example output:
    "
    {
      "1": [["5-31-2022", "1:00pm", "2:00pm"], ["6-1-2022", "11:30am", "12:30pm"]],
      "2": [["5-31-2022", "5:00pm", "6:00pm"]],
      "3": [["5-31-2022", "8:30pm", "9:30pm"]],
      "4": [["5-31-2022", "2:30pm", "4:30pm"]],
      "5": [["5-31-2022", "6:15pm", "8:15pm"]]
    }
    "
    The { } are part of the output. The output must be JSON parsable!

    Do not include a trailing comma after the last task.

    Notice that the start of each line is just the id of the task. It doesn't say "Task" or anything like that.

  # Current information

  The current date and time is May 30, 2022, 9:00 AM.

  # More notes about output format

  Do not output any headers or footers. Do not output any extra information. Only output the list
  of tasks EXACTLY as described above.
  
  Do not write anything like "# Solution" or "Here is the solution". Do not write anything like "ans=" or "output=". Just output the list of tasks Exactly like
  I've described above.

  DO NOT include a trailing comma after the last task.

  This is correct:
    {
      "1": [["5-31-2022", "1pm", "2pm"], ["6-1-2022", "11:30am", "12:30pm"]],
      "2": [["5-31-2022", "5pm", "6pm"]],
      "3": [["5-31-2022", "8:30pm", "9:30pm"]],
      "4": [["5-31-2022", "2:30pm", "4:30pm"]],
      "5": [["5-31-2022", "6:15pm", "8:15pm"]]
    }

  This is incorrect:

    {
      "1": [["5-31-2022", "1pm", "2pm"], ["6-1-2022", "11:30am", "12:30pm"]],
      "2": [["5-31-2022", "5pm", "6pm"]],
      "3": [["5-31-2022", "8:30pm", "9:30pm"]],
      "4": [["5-31-2022", "2:30pm", "4:30pm"]],
      "5": [["5-31-2022", "6:15pm", "8:15pm"]],
    }

  Do not write code

  # Tasks

  Below are the tasks. Each task has an id, a due date, and a duration. The due date is a date and time by which the task must be completed. The
  duration is the amount of time the task must be worked on. The task doesn't necessarily have to be completed in one sitting, but the total time spent
  on the task must be exactly the duration specified.

  """

  for task in tasks:
    s += f"Task {task['id']}: Due {task['due_date']}, Duration {task['duration']}\n"

  return s


def create_schedule(tasks):

  for _ in range(5):

    response = client.chat.completions.create(
        model="gpt-3.5-turbo",  # or "gpt-4" if you have access
        messages=[
            #{"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": make_prompt(tasks)},
        ]
    )

    res = response.choices[0].message.content

    # try parsing res as JSON

    try:
      o = json.loads(res)
      # ensure that each task is a key in the response
      for task in tasks:
        if str(task['id']) not in o:
          raise Exception("Missing task")
        
      return o
    except:
      print("FAILURE")
      print(res)
      print("FAILURE")
  

for _ in range(10):
  print(create_schedule([task1, task2, task3, task4]))
