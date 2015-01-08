from opstn.server import Server, Handler
from common import joystick
import logging

if __name__=="__main__":
    logging.basicConfig(level=logging.INFO)
    stick_body = joystick.Controller(0, name="body")
    server = Server(("localhost", 9999), Handler)
    server.add_controller(stick_body)

    try:
        server.serve_forever()
    finally:
        logging.info("Shutting down...")
        joystick.Controller.quit_all()
    logging.info("All done")
