import sqlite3
import os
import re
import csv

for filename in os.listdir('data'):
    if re.search("waitTimes\d+-\d+-\d+-\d+-\d+\.db", filename):
        conn = sqlite3.connect("./data/" + filename)
        cur = conn.cursor()
        data = cur.execute("SELECT * FROM waitTime")

        with open('./data/waittimescombined.csv', 'a+') as f:
            writer = csv.writer(f)
            writer.writerows(data)