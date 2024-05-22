@extends('itd-leader.layouts.app')

@section('content')
<div class="main-content">
    <div data-sidebar-container="chat" class="card chat-sidebar-container sidebar-container">
        <div data-sidebar="chat" class="chat-sidebar-wrap sidebar" style="left: 0px;">
            <div class="border-right">
                <div class="pt-2 pb-2 pl-3 pr-3 d-flex align-items-center o-hidden box-shadow-1 chat-topbar">
                    <a data-sidebar-toggle="chat" class="link-icon d-md-none">
                        <i class="icon-regular ml-0 mr-3 i-Left"></i>
                    </a>
                    <div class="form-group m-0 flex-grow-1">
                        <input type="text" class="form-control form-control-rounded" id="search" placeholder="Search contacts">
                    </div>
                </div>

                <div class="contacts-scrollable perfect-scrollbar ps">
                    @foreach ($users as $user)
                        <div class="p-3 d-flex border-bottom align-items-center contact online clearfix fore-user" data-user-id="{{ $user->id }}">
                            <img src="https://gull-html-laravel.ui-lib.com/assets/images/faces/3.jpg" alt="" class="avatar-sm rounded-circle mr-3">
                            <h6 class="">{{ $user->name }}</h6>
                        </div>
                    @endforeach
                    <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
                        <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                    </div>
                    <div class="ps__rail-y" style="top: 0px; right: 0px;">
                        <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div>
                    </div>
                </div>
            </div>
        </div>
        <div data-sidebar-content="chat" class="chat-content-wrap sidebar-content" style="margin-left: 260px;">
            <div class="d-flex pl-3 pr-3 pt-2 pb-2 o-hidden box-shadow-1 chat-topbar">
                <a data-sidebar-toggle="chat" class="link-icon d-md-none">
                    <i class="icon-regular i-Right ml-0 mr-3"></i>
                </a>
                <div class="d-flex align-items-center">
                    <img src="https://gull-html-laravel.ui-lib.com/assets/images/faces/13.jpg" alt="" class="avatar-sm rounded-circle mr-2">
                    <p class="m-0 text-title text-16 flex-grow-1 chat-with" id="chatUserName">Frank Powell</p>
                </div>
            </div>

            <div class="chat-content perfect-scrollbar ps ps--active-y" data-suppress-scroll-x="true" id="chatMessages">
                <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
                    <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                </div>
                <div class="ps__rail-y" style="top: 0px; height: 403px; right: 0px;">
                    <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 360px;"></div>
                </div>
            </div>

            <div class="pl-3 pr-3 pt-3 pb-3 box-shadow-1 chat-input-area">
                <form id="sendMessageForm">
                    @csrf
                    <div class="form-group">
                        <input type="text"name="message" id="message" class="form-control">
                    </div>
                    <input type="hidden" id="to_user_id" name="to_user_id">
                    <div class="d-flex">
                        <div class="flex-grow-1"></div>
                        <button class="btn btn-icon btn-rounded btn-primary mr-2" type="submit">
                            <i class="i-Paper-Plane"></i>
                        </button>
                        <button class="btn btn-icon btn-rounded btn-outline-primary" type="button">
                            <i class="i-Add-File"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<script>
    function sendMessage(event) {
        event.preventDefault();

        var formData = new FormData(document.getElementById("sendMessageForm"));

        fetch("{{ route('itd-leader.sendMessageRouteName') }}", {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById("message").value = "";
                const to_user_id = formData.get('to_user_id');

                addMessageToChat(data.message, true);

                // Kullanıcıyla olan sohbeti güncelle
                fetchMessages(to_user_id);
            } else {
                console.error('Mesaj gönderilirken bir hata oluştu:', data.message);
            }
        })
        .catch(error => {
            console.error('Bir hata oluştu:', error);
        });
    }

    function addMessageToChat(message, isMyMessage) {
        var messagesContainer = document.getElementById("chatMessages");
        var messageElement = document.createElement("div");
        messageElement.classList.add("d-flex", "mb-4");
        if (isMyMessage) {
            messageElement.classList.add("user");
        }

        if (!isMyMessage) {
            messageElement.innerHTML = `
                <div class="message flex-grow-1">
                    <div class="d-flex">
                        <p class="mb-1 text-title text-16 flex-grow-1">${message.from_user_name}</p>
                        <span class="text-small text-muted">${message.created_at}</span>
                    </div>
                    <p class="m-0">${message.message}</p>
                </div>
                <img src="https://gull-html-laravel.ui-lib.com/assets/images/faces/13.jpg" alt="" class="avatar-sm rounded-circle ml-3">
            `;
        } else {
            messageElement.innerHTML = `
                <img src="https://gull-html-laravel.ui-lib.com/assets/images/faces/1.jpg" alt="" class="avatar-sm rounded-circle mr-3">
                <div class="message flex-grow-1">
                    <div class="d-flex">
                        <p class="mb-1 text-title text-16 flex-grow-1">${message.from_user_name}</p>
                        <span class="text-small text-muted">${message.created_at}</span>
                    </div>
                    <p class="m-0">${message.message}</p>
                </div>
            `;
        }

        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;  // Scroll to bottom
    }

    function fetchMessages(userId) {
        fetch(`/itd-leader/messages/${userId}`)
            .then(response => response.json())
            .then(messages => {
                var messagesContainer = document.getElementById("chatMessages");
                messagesContainer.innerHTML = '';

                messages.forEach(message => {
                    addMessageToChat(message, message.from_user_id == @json(Auth::id()));
                });
            })
            .catch(error => {
                console.error('Bir hata oluştu:', error);
            });
    }

    window.onload = function () {
        document.getElementById("sendMessageForm").addEventListener("submit", sendMessage);
    };

    document.querySelectorAll('.fore-user').forEach(item => {
        item.addEventListener('click', function () {
            const userId = item.getAttribute('data-user-id');
            var userName = this.querySelector('h6').innerText.trim();

            document.getElementById("chatUserName").innerText = userName;
            document.getElementById("to_user_id").value = userId;

            fetchMessages(userId);
        });
    });
</script>
@endsection
