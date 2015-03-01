# (C) 2015  Kyoto University Mechatronics Laboratory
# Released under the GNU General Public License, version 3
class KaginawaException(Exception):
    """Root for all Kaginawa exceptions. Never raised."""


class CRCError(KaginawaException):
    """Raised when a cyclic redundancy check fails."""

class DriverError(KaginawaException):
    """Raised when a motor has no drivers enabled."""

