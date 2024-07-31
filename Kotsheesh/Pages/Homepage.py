from tkinter import*
from subprocess import call
from tkinter import messagebox



homepage = Tk()

def openAboutUs():
    homepage.destroy()
    call(["python", "/Pages/aboutUsPage.py"])

def display_msg():
    terminateGUI = messagebox.askyesno("Warning", "Do you really want to close the program?")
    if terminateGUI == True:
        homepage.destroy()

def registerNow():
    homepage.destroy()
    call(["python", "/Pages/registerOwner.py"])

def loginAdmin():
    homepage.destroy()
    call(["python", "/Pages/adminLogin.py"])


homepage.title("Homepage")
homepage.geometry("1366x768")

homepageBG = PhotoImage(file = "/Graphic/bgHomepage.png")
homepageLogo = PhotoImage(file = "/Graphic/kotsheeshHomepage.png")
aboutButton = PhotoImage(file = "/Graphic/aboutButton.png")


backgroundHome = Canvas(homepage, width=1366, height=768)

backgroundHome.create_image(683,385, image = homepageBG)


backgroundHome.create_text(100,100, text = "M A K E", font="Gill 25", fill="white")
mantraFont = ("Arial Black", 40, "bold")
backgroundHome.create_text(297,190, text = "E V E R Y  R I D E \nC O U N T S", font=mantraFont, fill="#B1D4E0")
backgroundHome.create_image(1050,230,image = homepageLogo)

buttonFrame = Frame(backgroundHome, width=305, height = 62, highlightbackground = "black", highlightthickness = 3, bd=0)
buttonFrame.place(x = 900, y = 400)

registerButton = Button(backgroundHome, text="REGISTER NOW", font="Arial 20 bold", fg="black", bg = "#e7e9ec", borderwidth=2, width=17, command=registerNow)
registerButton.place(x = 903, y = 403)

adminButton = Button(backgroundHome, text=" Administrator ", font="Calibri 10 bold underline", bg="white", borderwidth=0, width=15, command=loginAdmin)
adminButton.place(x = 1000, y = 470)

aboutUsBtn = Button(backgroundHome, image = aboutButton, borderwidth=0, bg='black', command = openAboutUs)
aboutUsBtn.place(x = 1150, y = 690)

backgroundHome.place(relx = 0.5, rely = 0.5, anchor=CENTER)


homepage.protocol('WM_DELETE_WINDOW', display_msg)
homepage.mainloop()