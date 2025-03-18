document.getElementById('dataEntryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    lineCountInput.addEventListener("input", function () {
        packageContainer.innerHTML = ''; // مسح الخانات القديمة
        const count = parseInt(lineCountInput.value) || 0;

        for (let i = 1; i <= count; i++) {
            const label = document.createElement("label");
            label.textContent = `اختر الباقة للخط ${i}:`;

            const select = document.createElement("select");
            select.name = `package${i}`;
            select.innerHTML = `
                <option value="">-- اختر الباقة --</option>
                <option value="Super kix 25">Super kix 25</option>
                <option value="Super kix 32">Super kix 32</option>
                <option value="Super kix 45">Super kix 45</option>
                <option value="Super kix 60">Super kix 60</option>
                <option value="Super kix 85">Super kix 85</option>
                <option value="Super kix 105">Super kix 105</option>
                <option value="Super kix 130">Super kix 130</option>
                <option value="New control Tazbeet 40">New control Tazbeet 40</option>
                <option value="New control Tazbeet 50">New control Tazbeet 50</option>
                <option value="New control Tazbeet 90">New control Tazbeet 90</option>
                <option value="New control Tazbeet 145">New control Tazbeet 145</option>
                <option value="We club 32">We club 32</option>
                <option value="We club 50">We club 50</option>
                <option value="We club 85">We club 85</option>
                <option value="We club 130">We club 130</option>
                <option value="We mix 215">We mix 215</option>
                <option value="We mix 310">We mix 310</option>
                <option value="Nitro 13">Nitro 13</option>
                <option value="Nitro 25">Nitro 25</option>
                <option value="Nitro 50">Nitro 50</option>
                <option value="Nitro 90">Nitro 90</option>
                <option value="Nitro 130">Nitro 130</option>
                <option value="Nitro 260">Nitro 260</option>
                <option value="Nitro 585">Nitro 585</option>
                <option value="We gold 260">We gold 260</option>
                <option value="We gold 525">We gold 525</option>
                <option value="We gold 775">We gold 775</option>
                <option value="We gold 1050">We gold 1050</option>
                <option value="We gold 1300">We gold 1300</option>
                <option value="We gold 2000">We gold 2000</option>
                <option value="We Air 260">We Air 260</option>
                <option value="We air 400">We air 400</option>
                <option value="We air 600">We air 600</option>
                <option value="We air 900">We air 900</option>
                <option value="We air 1100">We air 1100</option>
            `;

            packageContainer.appendChild(label);
            packageContainer.appendChild(select);
            packageContainer.appendChild(document.createElement("br"));
        }
    });

    const entry = {
        date: new Date().toISOString().split('T')[0],
        user: localStorage.getItem('currentUser'),
        lines: document.getElementById('lines').value,
        wePay: document.getElementById('wePay').value,
        data: document.getElementById('data').value,
        adsl: document.getElementById('adsl').value,
        fixed: document.getElementById('fixed').value
    };

    const existingData = JSON.parse(localStorage.getItem('salesData') || '[]');
    existingData.push(entry);
    localStorage.setItem('salesData', JSON.stringify(existingData));

    window.location.href = 'sales-dashboard.html';
});