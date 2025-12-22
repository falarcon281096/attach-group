'use client';

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useScrollReveal } from "@/components/useScrollReveal";

export default function TerminosYCondiciones() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-linear-to-r from-[#1e3fda] to-[#58308c] relative overflow-hidden animate-gradient">
      <div className="atm-initial bg-white">
        {/* Header */}
        <Header showBorder={false} variant='white-bg' isFixed={true} />
      </div>

      <div className="atm-content pb-10 md:pb-30 bg-white">
        {/* Hero Section */}
        <div className="relative pt-24 pb-12">
          <div className="px-6 lg:mx-30">
            <div className="max-w-4xl mx-auto">
              <h1 
                className="font-extrabold text-[32px] lg:text-[55px] bg-clip-text text-transparent leading-tight scroll-reveal mb-6"
                style={{
                  background: 'linear-gradient(276.34deg, #5E2F84 0.11%, #1840E2 100.11%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Términos y Condiciones de Uso del Servicio ProspectIA
              </h1>
              <p 
                className="text-base lg:text-lg leading-relaxed scroll-reveal scroll-reveal-delay-1 text-gray-700 mb-8"
              >
                Este contrato describe los términos y condiciones generales (los "Términos") aplicables al uso de los servicios ofrecidos por ATENA ADS S.A.C. (en adelante el "Proveedor"), identificada con RUC N° 20614216175, con domicilio en Av. Javier Prado Este N° 492, Int. 1202, San Isidro, Lima, a través de su plataforma de software denominado ProspectIA.
              </p>
              <p className="text-base lg:text-lg leading-relaxed scroll-reveal scroll-reveal-delay-2 text-gray-700 font-semibold">
                Al acceder, contratar o utilizar la Plataforma, usted (en adelante el "Cliente" o "Usuario") acepta estar legalmente vinculado por estos Términos.
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative px-6 lg:mx-30">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              {/* Sección 1 */}
              <section className="mb-12 scroll-reveal scroll-reveal-delay-3">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 bg-clip-text text-transparent" style={{
                  background: 'linear-gradient(276.34deg, #5E2F84 0.11%, #1840E2 100.11%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  1. DESCRIPCIÓN DEL SERVICIO Y ACCESOS
                </h2>
                
                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">1.1. Alcance del Servicio</h3>
                    <p className="mb-4 leading-relaxed">
                      ProspectIA es una solución SaaS (Software as a Service) de marketing y ventas potenciada por Inteligencia Artificial. La plataforma se compone de los siguientes módulos, cuyo acceso dependerá del Plan contratado:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li><strong>Módulo Agente Conversacional:</strong> Agentes de IA entrenados para sostener conversaciones en lenguaje natural.</li>
                      <li><strong>Módulo Lead Scoring:</strong> Sistema de calificación de leads basado en el análisis de la conversación.</li>
                      <li><strong>Módulo Atención Comercial:</strong> Herramientas para asesores humanos y dashboard de métricas de rendimiento de los asesores.</li>
                      <li><strong>Módulo Marketing:</strong> Envío de campañas masivas (WhatsApp) y creación de flujos automatizados.</li>
                      <li><strong>Módulo Publicidad:</strong> Envío de señales de conversión a plataformas publicitarias (Google/Meta).</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">1.2. Seguridad de la Cuenta y Accesos</h3>
                    <p className="leading-relaxed">
                      El Cliente es el único responsable de mantener la confidencialidad y seguridad de sus credenciales de acceso (usuarios y contraseñas) a la plataforma ProspectIA. El Proveedor no será responsable por cualquier pérdida, robo de información o daño derivado del acceso no autorizado a la cuenta del Cliente resultante de la negligencia, descuido o mala gestión de dichas credenciales por parte del Cliente o su personal. El Cliente se compromete a notificar inmediatamente al Proveedor cualquier uso no autorizado o sospechoso.
                    </p>
                  </div>
                </div>
              </section>

              {/* Sección 2 */}
              <section className="mb-12 scroll-reveal scroll-reveal-delay-4">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 bg-clip-text text-transparent" style={{
                  background: 'linear-gradient(276.34deg, #5E2F84 0.11%, #1840E2 100.11%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  2. IMPLEMENTACIÓN Y ENTRENAMIENTO
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    El Cliente reconoce y acepta los siguientes tiempos de despliegue estándar del servicio:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Setup Inicial:</strong> Los módulos de Atención Comercial, Marketing y Publicidad estarán disponibles en un plazo estimado de tres (3) días hábiles tras la firma y entrega de accesos.</li>
                    <li><strong>Entrenamiento del Agente IA:</strong> El despliegue inicial del Agente Conversacional se realiza en la segunda semana. El proceso de entrenamiento y afinamiento completo tiene una duración estimada de hasta dos (2) meses, tras lo cual entra en una fase de aprendizaje continuo. Durante este periodo, es posible que se requiera supervisión humana adicional por parte del Cliente. Sin embargo, en caso de cambiar las características con las que fue entrenado (nuevos productos, ofertas, descripciones, etc) es posible la necesidad de un re-entrenamiento el cual puede significar un costo y tiempo adicional.</li>
                  </ul>
                </div>
              </section>

              {/* Sección 3 */}
              <section className="mb-12 scroll-reveal scroll-reveal-delay-5">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 bg-clip-text text-transparent" style={{
                  background: 'linear-gradient(276.34deg, #5E2F84 0.11%, #1840E2 100.11%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  3. PLANES, TARIFAS Y LÍMITES DE CONSUMO
                </h2>
                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">3.1. Planes de Suscripción</h3>
                    <p className="mb-4 leading-relaxed">
                      El servicio se ofrece en modalidades tales como "Business", "Corporate" y "Enterprise", las cuales varían en número de usuarios y volumen de conversaciones.
                    </p>
                    <p className="leading-relaxed">
                      <strong>Exceso de Conversaciones:</strong> Las conversaciones que excedan el límite del plan contratado serán facturadas como "Conversaciones a Demanda" o requerirán un upgrade de plan, según las tarifas vigentes.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">3.2. Definición Técnica de "Conversación"</h3>
                    <p className="mb-4 leading-relaxed">
                      Para efectos de facturación, uso del sistema y cómputo de los límites del Plan contratado, se aplicarán las siguientes definiciones:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mb-4">
                      <li><strong>Unidad de Conversación (17 Mensajes):</strong> Se define como una conversación a un bloque de hasta 17 mensajes intercambiados en total (contabilizando tanto los enviados por el emisor/marca como los recibidos del receptor/prospecto). Estas conversaciones pueden ser iniciadas tanto por la marca (Outbound) como por el prospecto (Inbound). Si la interacción supera los 17 mensajes continuos, el sistema contabilizará una conversación adicional.</li>
                      <li><strong>Ventana de Tiempo (24 Horas):</strong> Se define, además, como una nueva conversación al acto de retomar una interacción conversacional 24 horas después del último mensaje registrado, independientemente de si se alcanzó el límite de 17 mensajes.</li>
                      <li><strong>Costo por Canal:</strong> Los costos variables por conversación pueden diferir dependiendo del canal utilizado (WhatsApp vs. Web/App propia), en función de las tarifas impuestas por proveedores terceros.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">3.3. Gestión de Límites y Excesos</h3>
                    <p className="mb-4 leading-relaxed">
                      Para evitar interrupciones no deseadas o cobros inesperados, se establece el siguiente protocolo al alcanzar el límite de conversaciones del plan contratado:
                    </p>
                    <ul className="list-disc pl-6 space-y-3">
                      <li><strong>Modalidad por Defecto (Continuidad):</strong> Salvo instrucción en contrario, si el Cliente excede el volumen de su plan, el servicio continuará activo para garantizar la operatividad del negocio. Las conversaciones excedentes se facturarán bajo la modalidad de "Pago por Consumo" según las tarifas vigentes a mes vencido.</li>
                      <li><strong>Opción de Suspensión:</strong> El Cliente podrá solicitar expresamente la configuración de un "Tope de Consumo". Bajo esta modalidad, al alcanzar el límite del plan, el sistema detendrá la recepción de nuevas interacciones hasta el inicio del siguiente ciclo de facturación o hasta que el Cliente autorice una ampliación del plan.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Sección 4 */}
              <section className="mb-12 scroll-reveal scroll-reveal-delay-6">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 bg-clip-text text-transparent" style={{
                  background: 'linear-gradient(276.34deg, #5E2F84 0.11%, #1840E2 100.11%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  4. NIVELES DE SERVICIO (SLA) Y SOPORTE
                </h2>
                <div className="space-y-6 text-gray-700">
                  <p className="leading-relaxed">
                    El Proveedor se compromete a realizar esfuerzos razonables para mantener una disponibilidad operativa (Uptime) mínima del 99.9%.
                  </p>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">4.1. Atención de Incidencias</h3>
                    <p className="mb-4 leading-relaxed">
                      El soporte técnico atenderá incidencias de Lunes a Viernes de 9:00 am a 6:00 pm. Los tiempos de respuesta y resolución se regirán por la siguiente tabla:
                    </p>
                    <div className="overflow-x-auto mb-4">
                      <table className="min-w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gradient-to-r from-[#5E2F84] to-[#1840E2] text-white">
                            <th className="border border-gray-300 px-4 py-3 text-left">Severidad</th>
                            <th className="border border-gray-300 px-4 py-3 text-left">Diagnóstico Inicial</th>
                            <th className="border border-gray-300 px-4 py-3 text-left">Resolución / Respuesta Final</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-700">
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">A. Alta</td>
                            <td className="border border-gray-300 px-4 py-3">Hasta 4 horas</td>
                            <td className="border border-gray-300 px-4 py-3">Hasta 2 días</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 font-semibold">B. Moderada</td>
                            <td className="border border-gray-300 px-4 py-3">Hasta 12 horas</td>
                            <td className="border border-gray-300 px-4 py-3">Hasta 3 días</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">C. Baja</td>
                            <td className="border border-gray-300 px-4 py-3">Hasta 24 horas</td>
                            <td className="border border-gray-300 px-4 py-3">Hasta 4 días</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">4.2. Exclusiones por Fallos de Terceros (Platform Risk)</h3>
                    <p className="leading-relaxed">
                      El Cliente reconoce que parte de la operatividad de ProspectIA depende de plataformas y servicios de terceros ajenos al control del Proveedor (incluyendo, pero no limitado a: WhatsApp Business API, servicios de Meta, Google Cloud Platform, Amazon Web Services y redes de telecomunicaciones). Por consiguiente, las interrupciones, bloqueos, latencia o errores causados directamente por fallos en estos servicios de terceros no se contabilizarán como tiempo de inactividad (Downtime) imputable al Proveedor para efectos del cálculo del SLA, ni generarán derecho a penalidades o indemnizaciones.
                    </p>
                  </div>
                </div>
              </section>

              {/* Sección 5 */}
              <section className="mb-12 scroll-reveal scroll-reveal-delay-7">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 bg-clip-text text-transparent" style={{
                  background: 'linear-gradient(276.34deg, #5E2F84 0.11%, #1840E2 100.11%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  5. PROPIEDAD INTELECTUAL Y DESARROLLOS A MEDIDA
                </h2>
                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">5.1. Titularidad del Software</h3>
                    <p className="leading-relaxed">
                      ATENA ADS S.A.C. conserva todos los derechos de propiedad intelectual, derechos de autor y derechos de explotación sobre ProspectIA, sus algoritmos, código fuente, interfaces y modelos de IA pre-entrenados.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">5.2. Desarrollos Personalizados</h3>
                    <p className="leading-relaxed">
                      En caso de que el Cliente contrate funcionalidades adicionales o integraciones a medida:
                    </p>
                    <p className="leading-relaxed mt-3">
                      <strong>Propiedad:</strong> Salvo pacto expreso y escrito en contrario, la propiedad intelectual de los nuevos desarrollos, módulos o conectores creados por el Proveedor, incluso si son pagados por el Cliente bajo concepto de "Setup Fee" o "Personalización", pertenecerá exclusivamente a ATENA ADS S.A.C. El Cliente obtiene únicamente una licencia de uso no exclusiva e intransferible sobre dichos desarrollos mientras mantenga su suscripción activa.
                    </p>
                  </div>
                </div>
              </section>

              {/* Sección 6 */}
              <section className="mb-12 scroll-reveal scroll-reveal-delay-8">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 bg-clip-text text-transparent" style={{
                  background: 'linear-gradient(276.34deg, #5E2F84 0.11%, #1840E2 100.11%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  6. CONFIDENCIALIDAD
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Las partes reconocen que, en virtud de la ejecución de este servicio, podrán tener acceso a información confidencial (técnica, financiera, estratégica o comercial) de la otra parte ("Información Confidencial"). Ambas partes se obligan a: (i) mantener dicha información en estricta reserva y resguardarla con el mismo celo que su propia información confidencial; (ii) no divulgarla a terceros sin consentimiento previo y escrito; y (iii) utilizarla únicamente para los fines del presente contrato. Esta obligación subsistirá durante la vigencia del servicio y por un periodo de dos (2) años posteriores a su terminación. No se considerará confidencial aquella información que sea de dominio público o que deba ser revelada por mandato legal.
                </p>
              </section>

              {/* Sección 7 */}
              <section className="mb-12 scroll-reveal scroll-reveal-delay-9">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 bg-clip-text text-transparent" style={{
                  background: 'linear-gradient(276.34deg, #5E2F84 0.11%, #1840E2 100.11%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  7. DATOS Y PRIVACIDAD
                </h2>
                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">7.1. Propiedad de los Datos</h3>
                    <p className="leading-relaxed">
                      El Cliente es y seguirá siendo el único propietario de los "Datos del Cliente" (información de leads, bases de datos, historiales de chat) cargados en la Plataforma.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">7.2. Retención de Datos Post-Servicio</h3>
                    <p className="leading-relaxed">
                      En caso de terminación del contrato por cualquier causa, el Proveedor mantendrá la información almacenada por un periodo máximo de tres (3) meses para facilitar una eventual reactivación o migración. Transcurrido este plazo, los datos serán eliminados permanentemente de los servidores del Proveedor sin posibilidad de recuperación.
                    </p>
                  </div>
                </div>
              </section>

              {/* Sección 8 */}
              <section className="mb-12 scroll-reveal scroll-reveal-delay-10">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 bg-clip-text text-transparent" style={{
                  background: 'linear-gradient(276.34deg, #5E2F84 0.11%, #1840E2 100.11%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  8. PAGOS, FACTURACIÓN Y CANCELACIÓN
                </h2>
                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">8.1. Facturación</h3>
                    <p className="leading-relaxed">
                      Los pagos recurrentes (suscripción mensual/anual) se facturan por adelantado al inicio del ciclo. Los consumos variables (exceso de conversaciones o servicios adicionales) se facturan a mes vencido.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">8.2. Política de Cancelación y No Reembolso</h3>
                    <p className="leading-relaxed">
                      El Cliente podrá cancelar su suscripción en cualquier momento notificando al Proveedor con al menos 30 días de anticipación. Dado que el servicio se factura bajo modalidad de reserva de recursos y prepago, no se realizarán reembolsos ni devoluciones prorrateadas por cancelaciones efectuadas antes de finalizar el ciclo de facturación vigente. El servicio permanecerá activo y accesible hasta el último día del periodo ya pagado.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">8.3. Suspensión por Mora</h3>
                    <p className="leading-relaxed">
                      El incumplimiento en el pago dentro de los plazos establecidos en la factura facultará al Proveedor a suspender temporalmente el acceso a la Plataforma hasta la regularización de la deuda, sin perjuicio del cobro de intereses moratorios y gastos administrativos de cobranza.
                    </p>
                  </div>
                </div>
              </section>

              {/* Sección 9 */}
              <section className="mb-12 scroll-reveal scroll-reveal-delay-11">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 bg-clip-text text-transparent" style={{
                  background: 'linear-gradient(276.34deg, #5E2F84 0.11%, #1840E2 100.11%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  9. AUTORIZACIÓN DE USO DE MARCA Y MARKETING
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  El Cliente otorga al Proveedor una licencia gratuita, no exclusiva y mundial para utilizar su nombre comercial, marcas y logotipos en el sitio web de ProspectIA, presentaciones comerciales y material de marketing, con el único fin de identificarlo como cliente o caso de éxito del Servicio. El Cliente podrá revocar esta autorización en cualquier momento mediante notificación escrita dirigida a los canales de soporte del Proveedor, tras lo cual el Proveedor procederá a retirar dichas referencias en un plazo razonable.
                </p>
              </section>

              {/* Sección 10 */}
              <section className="mb-12 scroll-reveal scroll-reveal-delay-12">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 bg-clip-text text-transparent" style={{
                  background: 'linear-gradient(276.34deg, #5E2F84 0.11%, #1840E2 100.11%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  10. DISPOSICIONES FINALES (MISCELÁNEOS)
                </h2>
                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">10.1. Anticorrupción y Cumplimiento</h3>
                    <p className="leading-relaxed">
                      Las partes declaran que sus actividades se rigen por principios éticos y legales. El Cliente garantiza que los fondos utilizados para el pago de los servicios provienen de actividades lícitas y declara que no utilizará la plataforma ProspectIA para fines relacionados con el lavado de activos, financiamiento del terrorismo o actos de corrupción. El Cliente libera al Proveedor de cualquier responsabilidad penal, civil o administrativa derivada del uso ilícito de la herramienta.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">10.2. Cesión de Posición Contractual</h3>
                    <p className="leading-relaxed">
                      El Cliente no podrá ceder ni transferir este contrato sin el consentimiento previo y por escrito del Proveedor. Por su parte, el Proveedor queda expresamente facultado para ceder su posición contractual, derechos de cobro o la operación de la plataforma a cualquier filial, subsidiaria o tercero que adquiera los activos de ATENA ADS S.A.C., bastando para ello la comunicación oportuna al Cliente.
                    </p>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

