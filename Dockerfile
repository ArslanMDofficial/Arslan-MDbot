FROM quay.io/mrarslanmd/arslanmd
RUN git clone https://github.com/Arslan-MD-Official/Arslan-Md /root/Arslan-MD-Official
WORKDIR /root/Arslan-MD-Official
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
