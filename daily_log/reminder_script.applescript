on run argv
    repeat with i from 1 to length of argv by 2
        set reminderText to item i of argv
        set reminderTimeStr to item (i + 1) of argv
        
        set reminderTime to do shell script "date -j -f \"%a %b %d %T %Z %Y\"\"" & reminderTimeStr & "\" \"+%m/%d/%y %H:%M:%S\""
        
        tell application "Reminders"
            activate
            set newReminder to make new reminder with properties {name:reminderText, remind me date:(date reminderTime)}
        end tell
    end repeat
end run
