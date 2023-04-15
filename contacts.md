---
layout: page
title: Contacts
permalink: /contacts/
---

<amp-img width="600" height="300" layout="responsive" src="../assets/images/20221106_training_session.jpg"></amp-img>

<div>
<h3>Comox Valley Canines</h3>

These are the current maintainers of the Comox Valley Canines. If you want to contribute, please reach out!
<br>
{% for author in site.data.authors %}
    <div class="contributor-group">
		<div class="contributor">
		{% if author[1].email %}
			<a href="mailto:{{author[1].email}}">
		
		{% endif %}
			{% if author[1].assets %}
				<img width="150" height="1500" class="author-thumb-contact" layout="responsive" src="../{{author[1].assets}}"/>
			{% endif %}
			<h5>{{author[1].name}}</h5>
			{{author[1].bio}}
		{% if author[1].email %}
		</a>
		{% endif %}
		</div>
    </div>
{% endfor %}
</div>

<div>
<h3>Comox Valley Municapal Contacts</h3>

There are a number of important contacts related to dog guardianship in the Comox Valley.

<h4>Comox</h4>
<h5>Bylaw Officers</h5>
<a href="https://www.comox.ca/town-hall/department-directory/bylaw-enforcement">Comox Bylaw Enforcement website</a><br>
Phone: (250) 339-2202 <br>
Fax: (250) 339-7110 <br>
<br>
<u>Bylaw Enforcement Officers</u> <br>
Peter Morrow: (250) 331-6466 <br>
Bill Smith: (250) 331-6467 <br>
Susan Anderson: (250) 331-6467 <br>

<h5>Animal Services</h5>
<a href="https://www.comox.ca/services/animal-services">Comox Animal Services website</a>

<h4>Courtenay</h4>
<h5>Bylaw Officers</h5>
<a href="https://www.courtenay.ca/EN/main/city-hall/bylaw-enforcement.html">Courtenay Bylaw Enforcement website</a><br>
Phone: (250) 334-4441<br>
Email: <a href="mailto:bylaw@courtenay.ca">bylaw@courtenay.ca</a>

<h5>Animal Control</h5>
<a href="https://www.courtenay.ca/EN/main/city-hall/bylaw-enforcement/animal-control.html">Courtenay Animal Control website</a>


<h4>Cumberland</h4>
<h5>Bylaw Officers</h5>
<a href="https://cumberland.ca/bylaw-enforcement/">Cumberland Bylaw Enforcement website</a><br>
Phone: (250) 336-2291

<h5>Animal Control</h5>
<a href="https://cumberland.ca/animal-control/">Cumberland Animal Control website</a>

</div>

