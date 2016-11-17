Often you have the situation where you have code that needs multiple different endpoints that don't run in the same app, so you can't run them all on the same port.

This is intended to reverse-proxy your localhost requests on port 4000 with various different paths to be routed to go to one or more other hosts and ports. *BONUS* local cookies may be rewritten to match the new domain.

Since the HTTPS stuff is a problem, logging in (which requires HTTPS on firefly) might not work without a tweak or two.
Alternatively, You may need want to use the [jstor-cookie-manager](https://github.com/ithaka/jstor-cookie-manager).
