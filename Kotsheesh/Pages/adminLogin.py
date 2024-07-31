from tkinter import*
from tkinter import messagebox
from subprocess import call

adminLogin = Tk()
adminLogin.title("Administrator Login")
adminLogin.geometry("1366x768")


def proceedDirectory():
    user = usernameEntry.get()
    passw = passEntry.get()
    if user != "admin":
        messagebox.showerror(title="Error!", message="Username doesn't exist! Try again.")
    elif user == "admin" and passw != "admin":
        messagebox.showerror(title="Error!", message="Wrong password! Try again.")
    else:
        messagebox.showinfo(title="Success!",message="Login Successfully!")
        adminLogin.destroy()
        call(["python", "/Pages/mainDirectory.py"])

def display_msg():
    terminateGUI = messagebox.askyesno("Warning", "Do you really want to close the program?")
    if terminateGUI == True:
        adminLogin.destroy()
def backHome():
    terminateGUI = messagebox.askyesno("Warning", "Do you want to go back to Homepage?")
    if terminateGUI == True:
        adminLogin.destroy()
        call(["python", "/Pages/Homepage.py"])

adminBg = PhotoImage(file = "/Graphic/loginBG.png")
arrowPic = PhotoImage(file = "/Graphic/arrowLogin.png")
procPic = PhotoImage(file = "/Graphic/proceedBtn.png")


adminCanvas = Canvas(adminLogin, width=1366, height=768)

adminCanvas.create_image(683, 385, image = adminBg)

arrowBtn = Button(adminCanvas, image=arrowPic, borderwidth=0, bg = "#f6f6fc", command=backHome)
arrowBtn.place(x = 450, y = 100)

inputFonts = ("Yu Gothic Light", 16)
usernameEntry = Entry(adminCanvas, font = inputFonts, width = 23)
usernameEntry.place(x = 600, y = 442)

passEntry = Entry(adminCanvas, font = inputFonts, width = 23, show = "*")
passEntry.place(x = 600, y = 502)
adminCanvas.place(relx = 0.5, rely = 0.5, anchor = CENTER)

proceedBtn = Button(adminCanvas, image = procPic, borderwidth=0, bg = "#f6f6fc", command=proceedDirectory)
proceedBtn.place(x = 610, y = 620)
adminLogin.protocol('WM_DELETE_WINDOW', display_msg)
adminLogin.mainloop()