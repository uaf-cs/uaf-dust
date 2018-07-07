import sqlite3
 
conn = sqlite3.connect("mydatabase.db") # or use :memory: to put it in RAM
 
cursor = conn.cursor()
 
# create a table
cursor.execute("""CREATE TABLE albums
                  (title text, artist text, release_date text, 
                   publisher text, media_type text) 
               """)