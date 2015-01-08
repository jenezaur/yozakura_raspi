# (C) 2015  Kyoto University Mechatronics Laboratory
# Released under the GNU General Public License, version 3
from rpi import motors
import socket
import pickle
import logging


if __name__ == "__main__":
    logging.basicConfig(level=logging.DEBUG)
    left_motor = motors.Motor(12, 8, 10, 11, "left_motor"，hard=True, scaling=0.9)
    right_motor = motors.Motor(35, 32, 36, 38, "right_motor", hard=True, scaling=0.9)

    while True:
        try:
            s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            s.connect(("localhost", 9999))
            s.sendall(str.encode("sticks_y"))
            result = s.recv(1024)
            lstick_y, rstick_y = pickle.loads(result)
            logging.debug("{:9.7} {:9.7}".format(lstick_y, rstick_y))
            left_motor.drive(-lstick_y)
            right_motor.drive(-rstick_y)
        except KeyboardInterrupt:
            break
    motors.Motor.shut_down_all()
    s.close()
