## Data Structure for StuffPass Frontend
-----------------------------------------------
* Wrapper  
    compnentDidMount {  
        var socket;  
        socket.emit("I am online!");  
    }  

    func send_message  
    func send_contact_id

    * RecentContactList (receive contact infos from backend)
        * Contact (id, name, status) (send contact id to backend) (call sent_contact_id)

    * ChatBox
        * MessageBox (receive message from backend (add, replace))
            * Message
        * InputBox (send message to backend) (call send_message)
