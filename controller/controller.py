import Tkinter as tk
import pusher

# Insert pusher.com details below
p = pusher.Pusher(
    app_id='pusher-app-id',
    key='pusher-key',
    secret='pusher-secret'
)

def handleKeypress(event):
    if event.keysym == 'Up':
        text.delete('1.0', 'end')
        text.insert('end', '⇧', 'tag-center')
        p['yo-control'].trigger('move', {'direction': 'forward'})
    elif event.keysym == 'Down':
        text.delete('1.0', 'end')
        text.insert('end', '⇩', 'tag-center')
        p['yo-control'].trigger('move', {'direction': 'reverse'})
    elif event.keysym == 'Right':
        text.delete('1.0', 'end')
        text.insert('end', '⇨', 'tag-center')
        p['yo-control'].trigger('move', {'direction': 'right'})
    elif event.keysym == 'Left':
        text.delete('1.0', 'end')
        text.insert('end', '⇦', 'tag-center')
        p['yo-control'].trigger('move', {'direction': 'left'})


if __name__ == '__main__':
    root = tk.Tk()
    text = tk.Text(root, background='black', foreground='white', font=('Comic Sans MS', 120))
        
    root.geometry('200x200')
    root.bind('<Key>', handleKeypress)

    text.pack(fill='both', expand=True)
    text.tag_configure('tag-center', justify='center')

    root.mainloop()

