const contactSection = document.createElement('section');
contactSection.classList.add('section');
contactSection.id = 'contact';
contactSection.innerHTML = `
<div class="right-flex">
  <div class="">
  <h3 class="contact">- Contact Us </h3>
  <h4 class="h4">Here You Can Make A Reservation Or Just walkin to our cafe</h4>
</div>
<p class="paragraph">Donec pretium est orci, non vulputate arcu hendrerit a. Fusce a eleifend riqsie,
 namei sollicitudin urna diam, sed commodo purus porta ut.
</p>
<div class="flex">
<div class="phone">
<p class="icon-container">
  <i class="icon fa fa-phone"></i>
  <p>
  <h4>Phone Numbers</h4>
  <span
    ><a href="#">080-090-0990</a><br />
    <a href="#">080-090-0880</a>
  </span>
</div>

<div class="message">
<p class="icon-container">
<i class="icon fa fa-envelope"></i>
</p>
  <h4>Emails</h4>
  <span>
    <a href="#">hello@company.com</a>
    <br /><a href="#">info@company.com</a>
  </span>
</div>
</div>
</div>

<form class="form" action="" method="post">
  <h4 class="table">Table Reservation</h4>
  <div class="div-input">
<div>
    <input class="input" name="name" type="text" id="name" placeholder="Your Name" required="" />
    <input class="input"
      name="email"
      type="text"
      id="email"
      pattern="[^ @]*@[^ @]*"
      placeholder="Your Email Address"
      required=""
    />
    <input class="input" name="phone" type="text" id="phone" placeholder="Phone Number" required="" />
    </div>
    <div>
    <select class="input" value="number-guests" name="number-guests" id="number-guests">
      <option value="number-guests">No Of Guests</option>
      <option name="1" id="1">1</option>
      <option name="2" id="2">2</option>
      <option name="3" id="3">3</option>
      <option name="4" id="4">4</option>
      <option name="5" id="5">5</option>
      <option name="6" id="6">6</option>
      <option name="7" id="7">7</option>
      <option name="8" id="8">8</option>
      <option name="9" id="9">9</option>
      <option name="10" id="10">10</option>
      <option name="11" id="11">11</option>
      <option name="12" id="12">12</option>
    </select>

    <input class="input" name="date" id="date" type="text" placeholder="dd/mm/yyyy" />

    <select class="input" value="time" name="time" id="time">
      <option value="time">Time</option>
      <option name="Breakfast" id="Breakfast">Breakfast</option>
      <option name="Lunch" id="Lunch">Lunch</option>
      <option name="Dinner" id="Dinner">Dinner</option>
    </select>
    </div>
    </div>
    <textarea class="textarea"
      name="message"
      rows="6"
      id="message"
      placeholder="Message"
      required=""
    ></textarea>
  <button type="submit" id="form-submit" class="form-button"> Make A Reservation </button>
</form>`;

export default contactSection;
