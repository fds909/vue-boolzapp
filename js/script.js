var app = new Vue (
    {
        el: "#root",
        data: {
            profile: {
                name: 'Sofia',
                avatar: '_io'
            },
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            currentIndex: 0,
            newMessage: '',
            searchContactName: '',
        },
        methods: {
            // Cambia la chat selezionata in base al click sul contatto
            changeContact: function(index) {
                this.currentIndex = index;
            },
            // Restituisce la data del messaggio in formato 'ora:minuto'
            getHourMinute: function(date) {
                return date.substring(11, 16);
            },
            sendMessage: function() {

                if (this.newMessage != '') {
                    let currentDate = this.getCurrentDate();

                    console.log(currentDate);

                    let myMessage = {
                        date: currentDate,
                        message: this.newMessage,
                        status: 'sent'
                    }

                    console.log(myMessage);
                    this.contacts[this.currentIndex].messages.push(myMessage);

                    // svuotamento della input text dopo l'invio del messaggio
                    this.newMessage = '';

                    // risposta automatica 'ok'
                    setTimeout(this.autoReply, 1000);
                }
            },
            autoReply: function(replyText) {
                // creazione della risposta
                let currentDate = this.getCurrentDate();

                let replyMessage = {
                    date: currentDate,
                    message: 'ok',
                    status: 'received'
                }

                this.contacts[this.currentIndex].messages.push(replyMessage);
            },
            filterContacts: function() {
                console.log("active");
            },
            getCurrentDate: function() {
                // Ottenimento degli elementi della data formattati a 2 cifre
                const day = ( (dayjs().get('date') < 10) ? '0' : '' ) + dayjs().get('date');
                const month = ( (dayjs().get('month') < 10) ? '0' : '' ) + (dayjs().get('month') + 1);
                const year = dayjs().get('year');
                const hour = ( (dayjs().get('hour') < 10) ? '0' : '' ) + dayjs().get('hour');
                const minute = ( (dayjs().get('minute') < 10) ? '0' : '' ) + dayjs().get('minute');
                const second = ( (dayjs().get('second') < 10) ? '0' : '' ) + dayjs().get('second');

                return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
            },
            filterContacts: function() {
                this.contacts.forEach(contact => {
                    if (contact.name.toLowerCase().includes(this.searchContactName.toLowerCase())) {
                        contact.visible = true;
                    } else {
                        contact.visible = false;
                    }
                });
            },
            deleteMessage: function(messageIndex) {
                this.contacts[this.currentIndex].messages.splice(messageIndex, 1);
            }
        }
    }
)