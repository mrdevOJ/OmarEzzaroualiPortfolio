import style from './styleNav.module.css'

export function Nav(){
  const heder =[style.navb,'container mt-1'].join(' ')

    return(

        <div className={heder}>
          <a class="navbar-brand fs-2 m-1" href="#">COREBRAINZ</a>
        
        <nav class=" m-1 navbar navbar-expand-lg ">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Projects">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#About">About me</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Contact">Contact</a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav></div>
    )
}