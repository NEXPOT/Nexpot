#Build Stage Start
#Specify a base image
FROM python:3.9

#Specify a working directory
WORKDIR '/project'

#Copy the dependencies file
COPY requirements.txt .

#Install dependencies
RUN /usr/local/bin/python -m pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

#Copy remaining files
COPY . .

#Run Stage Start
EXPOSE 8000
CMD [ "python", "manage.py", "runserver","0.0.0.0:8000" ]