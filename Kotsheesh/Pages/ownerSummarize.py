from tkinter import*
from tkinter import messagebox
import sqlite3
from subprocess import call


def adminChoice(choseID):
    ownerID = choseID
    ownerSummarize = Tk()
    ownerSummarize.title("Owner's Profile")
    ownerSummarize.geometry("1366x768")

    profileBG = PhotoImage(file = "/Graphic/ownerProfile.png")

    ownerBG = Canvas(ownerSummarize, width=1366, height=768)
    ownerBG.create_image(683,385, image = profileBG)
    ownerBG.place(relx = 0.5, rely = 0.5, anchor=CENTER)

    ownerSummarize.mainloop()