<!DOCTYPE html>
<html>
<head>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<title>Hoody</title>
			 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
			<link rel="stylesheet" type="text/css" href="style.css">
            <script src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js">
            </script>
            <script src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js">
            </script>
</head>
<body>
	 <div class="navbar">
		<a href="../../../auth" id="home">Home</a>
		<a href="../../../auth/registration" id="daftar">Daftar</a>
		<a href="../../../auth/login" id="login">Login</a>
	</div>

  <div class="contener_utama">
		<div class="contener_wraper">

							<div class="wraper_editor">
											                  <a href="../../../auth" id="kembali">
							                         	 <p id="kembalitext">Kembali</p>
							                          </a>

				                                 <a href="" id="riset">
									    		                  <p id="risettext">reset <i class="bi bi-arrow-counterclockwise"></i>
									    		                  </p>
									    	                 </a> 
								                 
				                                 <a href="../../../fitur_edit" id="edit">
				                         	        <p id="edittext">Edit Desain</p>
				                                 </a> 
						    	                
								                 <div id="textkaos">
										              	<h2>WARNA</h2>
										             </div>


										             <div id="warnakaos">
				                          
															   
													                <div id="hitam"></div>
													                <div class="text" id="texthitam">HITAM</div>
													                <div id="putih"></div>
													                <div class="text" id="textputih">PUTIH</div>
													                <div id="abumisty"></div>
													                <div class="text" id="textabumisty">ABU MISTY</div>
													                <div id="abutua"></div>
													                <div class="text" id="textabutua">ABU TUA</div>
													                <div id="merah"></div>
													                <div class="text" id="textmerah">MERAH</div> 
												              
													                <div id="pink"></div>
													                <div class="text" id="textpink">PINK</div>
													                <div id="fanta"></div>
													                <div class="text" id="textfanta">FANTA</div>
													                <div id="biruturkis"></div>
													                <div class="text" id="textbiruturkis">BIRU TURKIS</div>
													                <div id="birubenhur"></div>
													                <div class="text" id="textbirubenhur">BIRU BENHUR</div>
													                <div id="navy"></div>
													                <div class="text" id="textnavy">NAVY</div>     
												            
													                <div id="hijaustabilo"></div>
													                <div class="text" id="texthijaustabilo">HIJAU STABILO</div>
													                <div id="hijautosca"></div>
													                <div class="text" id="texthijautosca">HIJAU TOSCA</div>
													                <div id="hijaufuji"></div>
													                <div class="text" id="texthijaufuji">HIJAU FUJI</div>
													                <div id="mustard"></div>
													                <div class="text" id="textmustard">MUSTARD</div>
													                <div id="kuningkenari"></div>
													                <div class="text" id="textkuningkenari">KUNING KENARI</div>       
												              
													              	<div id="coklat"></div>
													              	<div class="text" id="textcoklat">COKLAT</div>
													              	<div id="cream"></div>
														            <div class="text" id="textcream">CREAM</div>
														            <div id="hijaubotol"></div>
														            <div class="text" id="texthijaubotol">HIJAU BOTOL</div>
														            <div id="teracota"></div>
														            <div class="text" id="textteracota">TERACOTA</div>
														            <div id="ungu"></div>
														            <div class="text" id="textungu">UNGU</div>   
												              
												              	    <div id="abumuda"></div>
													                <div class="text" id="textabumuda">ABU MUDA</div> 
												              	    <div id="birumuda"></div>
													                <div class="text" id="textbirumuda">BIRU MUDA</div>
													                <div id="oren"></div>
												              	    <div class="text" id="textoren">OREN</div>
														            <div id="hijauarmy"></div>
														            <div class="text" id="texthijauarmy">HIJAU ARMY</div> 
														            <div id="maroon"></div>
														            <div class="text" id="textmaroon">MAROON</div>   
										                      
										            </div>
										            <div id="textbg">
										              	<h2>BACKGRAUND</h2>
										            </div>
										            <div id="warnabg">
								                                  <div id="bgputih"></div>
																 <div id="bghitam"></div>
															     <div id="bgbiru"></div>  
																 <div id="bgmerah"></div>
															     <!-- <div id="bgtf"> -->
															     	<img src="../tficon.png" id="bgtf">
															     <!-- </div> -->
															     <div id="bghijau"></div>
															     <div id="bgupload" class="buttonbg">
															     	<img src="../uploadicon.png" id="icon">
																	<input type="file" hidden id="file-inputbg">
																 </div>
																	     

															     <span class="text" id="bgtextputih">PUTIH</span>
															     <span class="text" id="bgtexthitam">HITAM</span>
																 <span class="text" id="bgtextbiru">BIRU</span>
																 <span class="text" id="bgtextmerah">MERAH</span>
																 <span class="text" id="bgtexttf">TRANSPARAN</span>
																 <span class="text" id="bgtexthijau">HIJAU</span>
																 <span class="text" id="bgtextupload">UPLOAD</span>
										              </div>
							</div>




						    <div class="wraper_kaos">
                               <a type="button" id="download">
								                 <p id="downloadtext">Download  <i class="bi bi-download"></i>
								               </p> 
								               </a>

								               <a href="../index.php" id="back">
		                             <p id="backtext">Depan</p>
		                           </a>

									    	 <input type="file" id="file-input" hidden>
									    	 <div class="button">
									    		<p id="upload">Upload Desain <i class="bi bi-upload"></i></p>
									    	 </div>

									    	 <input type="file" id="file-input2" hidden>
									    	 <div class="button2">
									    		<p id="upload2">Upload Desain <i class="bi bi-upload"></i></p>
									    	 </div>

									    	 <input type="file" id="file-input3" hidden>
									    	 <div class="button3">
									    		<p id="upload3">Upload Desain <i class="bi bi-upload"></i></p>
									    	 </div>

									    	 <input type="file" id="file-input4" hidden>
									    	 <div class="button4">
									    		<p id="upload4">Upload Desain <i class="bi bi-upload"></i></p>
									    	 </div>

									    	 <input type="file" id="file-input5" hidden>
									    	 <div class="button5">
									    		<p id="upload5">Upload Desain <i class="bi bi-upload"></i></p>
									    	 </div>

									    	 <a href="https://api.whatsapp.com/send?phone=6285892022876&text=saya%20ingin%20order%20sablon%20hoodie%20apakah%20bisa?%0Adan%20untuk%20estimasi%20harganya%20berapa?" target="blank" id="order">
									    		<p id="ordertext">Order <i class="bi bi-whatsapp"></i>
									    		</p>
									    	 </a>
											 <div class="contenerkaos" id = "htmlContent">
											  	            <div id="gambarbg"></div>
															<img src="hoodybelakang/hijaufuji.png" id="kaos">
                                                            <!-- <div id="overflow"> -->
															   <div class="contenerdesain">
																	  <div  id="drag-area">  
																				   <div id="load"> 
																					    <div  class="gambar"></div>
																				   </div> 
                                                                        
																				   <div id="load2">
																				         <div  class="gambar2"></div>
																				   </div>

																					<div  id="load3">
																				          <div  class="gambar3"></div>
																					</div> 

																					<div  id="load4">
																				          <div  class="gambar4"></div>
																					</div> 

																					<div id="load5">
                                              <div  id="templet">
																						      <i id="italic">
																							      	DESAIN MU DI SINI <br><br>
																							      	BISA FOTO,KATA-KATA DLL
																						      </i>
																						  </div>
																				         <div class="gambar5"></div>
																					</div>   
																				 
																		</div>
															   </div>
                                                            <!-- </div> -->
										     </div>
                                             <div id="contenerputar">
						             	       <label for="putar"><p>PUTAR</p></label>
								   	           <input type="range" name="" id="putar" min="0" max="360"> 
		                                     </div>
		                                      
		                    
		                                     <div id="contenerukuran">
		              	                       <label for="ukuran"><p>UKURAN DESAIN</p></label>
				   	         	               <input type="range" name="" id="ukuran" min="20" max="230">
                                             </div>
                            
                                             <div id="contenerputar2">
						             	       <label for="putar2"><p>PUTAR</p></label>
								   	           <input type="range" name="" id="putar2" min="0" max="360"> 
		                                     </div>
		                    
		                                     <div id="contenerukuran2">
		              	                       <label for="ukuran2"><p>UKURAN DESAIN</p></label>
				   	         	               <input type="range" name="" id="ukuran2" min="20" max="230">
                                             </div>
                            
                                             <div id="contenerputar3">
						             	        <label for="putar3"><p>PUTAR</p></label>
								   	            <input type="range" name="" id="putar3" min="0" max="360"> 
		                                     </div>
		                    
		                                     <div id="contenerukuran3">
		              	                       <label for="ukuran3"><p>UKURAN DESAIN</p></label>
				   	         	               <input type="range" name="" id="ukuran3" min="20" max="230">
                                             </div>
                            
                                            <div id="contenerputar4">
						             	       <label for="putar4"><p>PUTAR</p></label>
								   	           <input type="range" name="" id="putar4" min="0" max="360"> 
		                                    </div>
		                    
		                                    <div id="contenerukuran4">
		              	                       <label for="ukuran4"><p>UKURAN DESAIN</p></label>
				   	         	               <input type="range" name="" id="ukuran4" min="20" max="230">
                                            </div>

										    <div id="contenerputar5">
						             	       <label for="putar5"><p>PUTAR</p></label>
								   	           <input type="range" name="" id="putar5" min="0" max="360"> 
		                                    </div>
		                    
		                                    <div id="contenerukuran5">
		              	                       <label for="ukuran5"><p>UKURAN DESAIN</p></label>
				   	         	               <input type="range" name="" id="ukuran5" min="20" max="230">
                                            </div>
						    </div>

	    </div>
  </div>
  <script type="text/javascript" src="script.js"></script>
</body>
</html>