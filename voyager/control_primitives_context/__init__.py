import os

import pkg_resources

from voyager.utils.file_utils import f_exists, f_join, f_mkdir, load_text
from voyager.utils.json_utils import (
    dump_json,
    json_dump,
    json_dumps,
    json_load,
    load_json,
)


def load_control_primitives_context(primitive_names=None):
    package_path = pkg_resources.resource_filename("voyager", "")
    if primitive_names is None:
        primitive_names = [
            primitive[:-3]
            for primitive in os.listdir(f"{package_path}/control_primitives_context")
            if primitive.endswith(".js")
        ]
    primitives = [
        load_text(f"{package_path}/control_primitives_context/{primitive_name}.js")
        for primitive_name in primitive_names
    ]
    return primitives
