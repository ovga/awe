<template>
  <section id="footer">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
          <ul class="list-unstyled list-inline social text-center">
            <li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
            <li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#"><i class="fa fa-google-plus"></i></a></li>
            <li class="list-inline-item"><a href="#" target="_blank"><i class="fa fa-envelope"></i></a></li>
          </ul>
        </div>
        <hr/>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
          <p>Some description in the footer section would be nice!</p>
          <p class="h6">&copy All Rights Reserved</p>
        </div>
        <hr/>
      </div>
    </div>
  </section>
</template>

<style>
  @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

  section {
    padding: 10px;
  }

  #footer {
    background: #17a2b8 !important;
  }

  #footer a {
    color: #ffffff;
    text-decoration: none !important;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }

  #footer ul.social li {
    padding: 3px 0;
  }

  #footer ul.social li a i {
    margin-right: 5px;
    font-size: 25px;
    -webkit-transition: .3s all ease;
    -moz-transition: .3s all ease;
    transition: .3s all ease;
  }

  #footer ul.social li:hover a i {
    font-size: 30px;
    margin-top: -10px;
  }

  #footer ul.social li a {
    color: #ffffff;
  }

  #footer ul.social li a:hover {
    color: #eeeeee;
  }

</style>
