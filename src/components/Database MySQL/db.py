'''import mysql.connector

#method 1
data = mysql.connector.connect(
    host="localhost:",
    user="root",
    port="3308",
    password=""
    )

#CRUD is performed by using this cursor only
cur=data.cursor()

cur.execute("CREATE DATABASE first")'''

import mysql.connector

config = {
    'user': 'root',
    'password': '',
    'host': 'localhost',
    'port': 3308,  # Adjust as necessary
    'database': 'first',
}

try:
    cnx = mysql.connector.connect(**config)
    cur=cnx.cursor()
    #cur.execute("CREATE DATABASE first")
    #cur.execute("SHOW DATABASEs")
    cur.execute("CREATE TABLE table2(user VARCHAR(20),pwd VARCHAR(20),email VARCHAR(20)")
    #cur.execute("INSERT INTO table1(user,class,password,email) VALUES('none','none','none','none')")
    #sql="INSERT table1(user,class,password,email) VALUES(%s,%s,%s,%s)"
    #val=("kritika","btech","123","none")
    #cur.execute(sql,val)

    '''cur.execute("SELECT * FROM table1")
    result=cur.fetchall()
    for x in result:
        print(x)'''
    cnx.commit()

    # Proceed with operations on the connection
except mysql.connector.Error as err:
    print(f"Error: {err}")


