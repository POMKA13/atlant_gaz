function openTab(evt, capacity) {
    let capacityTabcontent;
    let capacityTablink;

    capacityTabcontent = document.getElementsByClassName(
      "capacity__tabcontent"
    );

    for (let i = 0; i < capacityTabcontent.length; i++) {
        capacityTabcontent[i].style.display = 'none'
    }

    capacityTablink = document.getElementsByClassName("capacity__tablink");

    for (let i = 0; i < capacityTablink.length; i++) {
        capacityTablink[i].classList = capacityTablink[i].className.replace(' active', '')
    }

    document.getElementById(capacity).style.display = 'block'
    evt.currentTarget.className += ' active'
}