export default function Contact2() {
	return (
		<>
			<section id="contact" className="section-contact-2 position-relative pb-60 overflow-hidden">
				<div className="container position-relative z-1">
					<h2 className="text-center fs-2 fs-lg-3">Hablemos ;)</h2>
					<div className="row align-items-center">
						<div className="col-12 d-flex flex-wrap justify-content-around">
							<div className="d-flex align-items-center mb-3 position-relative d-inline-flex flex-column flex-md-row">
								<div className="d-inline-block">
									<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
										<i className="ri-whatsapp-fill text-primary-2 fs-26" />
									</div>
								</div>
								<div className="ps-3 h-100">
									<span className="text-400 fs-6">Teléfono</span>
									<h6 className="mb-0">+569-4235-3656</h6>
								</div>
								<a href="tel:+1-234-567-8901" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
							<div className="d-flex align-items-center mb-3 position-relative d-inline-flex flex-column flex-md-row">
								<div className="d-inline-block">
									<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
										<i className="ri-mail-fill text-primary-2 fs-26" />
									</div>
								</div>
								<div className="ps-3 h-100">
									<span className="text-400 fs-6">Email</span>
									<h6 className="mb-0">contacto@jorgetoledo.cl</h6>
								</div>
								<a href="mailto:someone@example.com" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
							<div className="d-flex align-items-center mb-3 position-relative d-inline-flex flex-column flex-md-row">
								<div className="d-inline-block">
									<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
										<i className="ri-discord-fill text-primary-2 fs-26" />
									</div>
								</div>
								<div className="ps-3 h-100">
									<span className="text-400 fs-6">Discord</span>
									<h6 className="mb-0">_jorgetoledo</h6>
								</div>
								<a href="skype:SKYPENAME?add" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
							<div className="d-flex align-items-center mb-3 position-relative d-inline-flex flex-column flex-md-row">
								<div className="d-inline-block">
									<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
										<i className="ri-map-2-fill text-primary-2 fs-26" />
									</div>
								</div>
								<div className="ps-3 h-100">
									<span className="text-400 fs-6">Dirección</span>
									<h6 className="mb-0">Las Condes, Santiago de Chile</h6>
								</div>
								<a href="https://maps.google.com/maps?q=1st+avenue,New+York" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
