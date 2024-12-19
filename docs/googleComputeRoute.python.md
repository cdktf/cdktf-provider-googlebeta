# `googleComputeRoute` Submodule <a name="`googleComputeRoute` Submodule" id="@cdktf/provider-google-beta.googleComputeRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRoute <a name="GoogleComputeRoute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route google_compute_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_route

googleComputeRoute.GoogleComputeRoute(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dest_range: str,
  name: str,
  network: str,
  description: str = None,
  id: str = None,
  next_hop_gateway: str = None,
  next_hop_ilb: str = None,
  next_hop_instance: str = None,
  next_hop_instance_zone: str = None,
  next_hop_ip: str = None,
  next_hop_vpn_tunnel: str = None,
  priority: typing.Union[int, float] = None,
  project: str = None,
  tags: typing.List[str] = None,
  timeouts: GoogleComputeRouteTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.destRange">dest_range</a></code> | <code>str</code> | The destination range of outgoing packets that this route applies to. Only IPv4 is supported. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.network">network</a></code> | <code>str</code> | The network that this route applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#id GoogleComputeRoute#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.nextHopGateway">next_hop_gateway</a></code> | <code>str</code> | URL to a gateway that should handle matching packets. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.nextHopIlb">next_hop_ilb</a></code> | <code>str</code> | The IP address or URL to a forwarding rule of type loadBalancingScheme=INTERNAL that should handle matching packets. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.nextHopInstance">next_hop_instance</a></code> | <code>str</code> | URL to an instance that should handle matching packets. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.nextHopInstanceZone">next_hop_instance_zone</a></code> | <code>str</code> | The zone of the instance specified in next_hop_instance. Omit if next_hop_instance is specified as a URL. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.nextHopIp">next_hop_ip</a></code> | <code>str</code> | Network IP address of an instance that should handle matching packets. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.nextHopVpnTunnel">next_hop_vpn_tunnel</a></code> | <code>str</code> | URL to a VpnTunnel that should handle matching packets. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The priority of this route. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#project GoogleComputeRoute#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | A list of instance tags to which this route applies. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeouts">GoogleComputeRouteTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dest_range`<sup>Required</sup> <a name="dest_range" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.destRange"></a>

- *Type:* str

The destination range of outgoing packets that this route applies to. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#dest_range GoogleComputeRoute#dest_range}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#name GoogleComputeRoute#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.network"></a>

- *Type:* str

The network that this route applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#network GoogleComputeRoute#network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#description GoogleComputeRoute#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#id GoogleComputeRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `next_hop_gateway`<sup>Optional</sup> <a name="next_hop_gateway" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.nextHopGateway"></a>

- *Type:* str

URL to a gateway that should handle matching packets.

Currently, you can only specify the internet gateway, using a full or
partial valid URL:

* 'https://www.googleapis.com/compute/v1/projects/project/global/gateways/default-internet-gateway'
* 'projects/project/global/gateways/default-internet-gateway'
* 'global/gateways/default-internet-gateway'
* The string 'default-internet-gateway'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#next_hop_gateway GoogleComputeRoute#next_hop_gateway}

---

##### `next_hop_ilb`<sup>Optional</sup> <a name="next_hop_ilb" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.nextHopIlb"></a>

- *Type:* str

The IP address or URL to a forwarding rule of type loadBalancingScheme=INTERNAL that should handle matching packets.

With the GA provider you can only specify the forwarding
rule as a partial or full URL. For example, the following
are all valid values:

* 10.128.0.56
* https://www.googleapis.com/compute/v1/projects/project/regions/region/forwardingRules/forwardingRule
* regions/region/forwardingRules/forwardingRule

When the beta provider, you can also specify the IP address
of a forwarding rule from the same VPC or any peered VPC.

Note that this can only be used when the destinationRange is
a public (non-RFC 1918) IP CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#next_hop_ilb GoogleComputeRoute#next_hop_ilb}

---

##### `next_hop_instance`<sup>Optional</sup> <a name="next_hop_instance" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.nextHopInstance"></a>

- *Type:* str

URL to an instance that should handle matching packets.

You can specify this as a full or partial URL. For example:

* 'https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/instance'
* 'projects/project/zones/zone/instances/instance'
* 'zones/zone/instances/instance'
* Just the instance name, with the zone in 'next_hop_instance_zone'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#next_hop_instance GoogleComputeRoute#next_hop_instance}

---

##### `next_hop_instance_zone`<sup>Optional</sup> <a name="next_hop_instance_zone" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.nextHopInstanceZone"></a>

- *Type:* str

The zone of the instance specified in next_hop_instance. Omit if next_hop_instance is specified as a URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#next_hop_instance_zone GoogleComputeRoute#next_hop_instance_zone}

---

##### `next_hop_ip`<sup>Optional</sup> <a name="next_hop_ip" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.nextHopIp"></a>

- *Type:* str

Network IP address of an instance that should handle matching packets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#next_hop_ip GoogleComputeRoute#next_hop_ip}

---

##### `next_hop_vpn_tunnel`<sup>Optional</sup> <a name="next_hop_vpn_tunnel" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.nextHopVpnTunnel"></a>

- *Type:* str

URL to a VpnTunnel that should handle matching packets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#next_hop_vpn_tunnel GoogleComputeRoute#next_hop_vpn_tunnel}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

The priority of this route.

Priority is used to break ties in cases
where there is more than one matching route of equal prefix length.

In the case of two routes with equal prefix length, the one with the
lowest-numbered priority value wins.

Default value is 1000. Valid range is 0 through 65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#priority GoogleComputeRoute#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#project GoogleComputeRoute#project}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

A list of instance tags to which this route applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#tags GoogleComputeRoute#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeouts">GoogleComputeRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#timeouts GoogleComputeRoute#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.resetNextHopGateway">reset_next_hop_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.resetNextHopIlb">reset_next_hop_ilb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.resetNextHopInstance">reset_next_hop_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.resetNextHopInstanceZone">reset_next_hop_instance_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.resetNextHopIp">reset_next_hop_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.resetNextHopVpnTunnel">reset_next_hop_vpn_tunnel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#create GoogleComputeRoute#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#delete GoogleComputeRoute#delete}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_next_hop_gateway` <a name="reset_next_hop_gateway" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.resetNextHopGateway"></a>

```python
def reset_next_hop_gateway() -> None
```

##### `reset_next_hop_ilb` <a name="reset_next_hop_ilb" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.resetNextHopIlb"></a>

```python
def reset_next_hop_ilb() -> None
```

##### `reset_next_hop_instance` <a name="reset_next_hop_instance" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.resetNextHopInstance"></a>

```python
def reset_next_hop_instance() -> None
```

##### `reset_next_hop_instance_zone` <a name="reset_next_hop_instance_zone" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.resetNextHopInstanceZone"></a>

```python
def reset_next_hop_instance_zone() -> None
```

##### `reset_next_hop_ip` <a name="reset_next_hop_ip" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.resetNextHopIp"></a>

```python
def reset_next_hop_ip() -> None
```

##### `reset_next_hop_vpn_tunnel` <a name="reset_next_hop_vpn_tunnel" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.resetNextHopVpnTunnel"></a>

```python
def reset_next_hop_vpn_tunnel() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleComputeRoute resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_route

googleComputeRoute.GoogleComputeRoute.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_route

googleComputeRoute.GoogleComputeRoute.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_route

googleComputeRoute.GoogleComputeRoute.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_route

googleComputeRoute.GoogleComputeRoute.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleComputeRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeRoute to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nextHopInterRegionCost">next_hop_inter_region_cost</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nextHopMed">next_hop_med</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nextHopNetwork">next_hop_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nextHopOrigin">next_hop_origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference">GoogleComputeRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.destRangeInput">dest_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nextHopGatewayInput">next_hop_gateway_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nextHopIlbInput">next_hop_ilb_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nextHopInstanceInput">next_hop_instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nextHopInstanceZoneInput">next_hop_instance_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nextHopIpInput">next_hop_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nextHopVpnTunnelInput">next_hop_vpn_tunnel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeouts">GoogleComputeRouteTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.destRange">dest_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nextHopGateway">next_hop_gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nextHopIlb">next_hop_ilb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nextHopInstance">next_hop_instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nextHopInstanceZone">next_hop_instance_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nextHopIp">next_hop_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nextHopVpnTunnel">next_hop_vpn_tunnel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `next_hop_inter_region_cost`<sup>Required</sup> <a name="next_hop_inter_region_cost" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nextHopInterRegionCost"></a>

```python
next_hop_inter_region_cost: str
```

- *Type:* str

---

##### `next_hop_med`<sup>Required</sup> <a name="next_hop_med" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nextHopMed"></a>

```python
next_hop_med: str
```

- *Type:* str

---

##### `next_hop_network`<sup>Required</sup> <a name="next_hop_network" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nextHopNetwork"></a>

```python
next_hop_network: str
```

- *Type:* str

---

##### `next_hop_origin`<sup>Required</sup> <a name="next_hop_origin" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nextHopOrigin"></a>

```python
next_hop_origin: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.timeouts"></a>

```python
timeouts: GoogleComputeRouteTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference">GoogleComputeRouteTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dest_range_input`<sup>Optional</sup> <a name="dest_range_input" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.destRangeInput"></a>

```python
dest_range_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `next_hop_gateway_input`<sup>Optional</sup> <a name="next_hop_gateway_input" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nextHopGatewayInput"></a>

```python
next_hop_gateway_input: str
```

- *Type:* str

---

##### `next_hop_ilb_input`<sup>Optional</sup> <a name="next_hop_ilb_input" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nextHopIlbInput"></a>

```python
next_hop_ilb_input: str
```

- *Type:* str

---

##### `next_hop_instance_input`<sup>Optional</sup> <a name="next_hop_instance_input" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nextHopInstanceInput"></a>

```python
next_hop_instance_input: str
```

- *Type:* str

---

##### `next_hop_instance_zone_input`<sup>Optional</sup> <a name="next_hop_instance_zone_input" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nextHopInstanceZoneInput"></a>

```python
next_hop_instance_zone_input: str
```

- *Type:* str

---

##### `next_hop_ip_input`<sup>Optional</sup> <a name="next_hop_ip_input" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nextHopIpInput"></a>

```python
next_hop_ip_input: str
```

- *Type:* str

---

##### `next_hop_vpn_tunnel_input`<sup>Optional</sup> <a name="next_hop_vpn_tunnel_input" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nextHopVpnTunnelInput"></a>

```python
next_hop_vpn_tunnel_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleComputeRouteTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeouts">GoogleComputeRouteTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dest_range`<sup>Required</sup> <a name="dest_range" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.destRange"></a>

```python
dest_range: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `next_hop_gateway`<sup>Required</sup> <a name="next_hop_gateway" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nextHopGateway"></a>

```python
next_hop_gateway: str
```

- *Type:* str

---

##### `next_hop_ilb`<sup>Required</sup> <a name="next_hop_ilb" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nextHopIlb"></a>

```python
next_hop_ilb: str
```

- *Type:* str

---

##### `next_hop_instance`<sup>Required</sup> <a name="next_hop_instance" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nextHopInstance"></a>

```python
next_hop_instance: str
```

- *Type:* str

---

##### `next_hop_instance_zone`<sup>Required</sup> <a name="next_hop_instance_zone" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nextHopInstanceZone"></a>

```python
next_hop_instance_zone: str
```

- *Type:* str

---

##### `next_hop_ip`<sup>Required</sup> <a name="next_hop_ip" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nextHopIp"></a>

```python
next_hop_ip: str
```

- *Type:* str

---

##### `next_hop_vpn_tunnel`<sup>Required</sup> <a name="next_hop_vpn_tunnel" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.nextHopVpnTunnel"></a>

```python
next_hop_vpn_tunnel: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRoute.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRouteConfig <a name="GoogleComputeRouteConfig" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_route

googleComputeRoute.GoogleComputeRouteConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dest_range: str,
  name: str,
  network: str,
  description: str = None,
  id: str = None,
  next_hop_gateway: str = None,
  next_hop_ilb: str = None,
  next_hop_instance: str = None,
  next_hop_instance_zone: str = None,
  next_hop_ip: str = None,
  next_hop_vpn_tunnel: str = None,
  priority: typing.Union[int, float] = None,
  project: str = None,
  tags: typing.List[str] = None,
  timeouts: GoogleComputeRouteTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.destRange">dest_range</a></code> | <code>str</code> | The destination range of outgoing packets that this route applies to. Only IPv4 is supported. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.network">network</a></code> | <code>str</code> | The network that this route applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#id GoogleComputeRoute#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.nextHopGateway">next_hop_gateway</a></code> | <code>str</code> | URL to a gateway that should handle matching packets. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.nextHopIlb">next_hop_ilb</a></code> | <code>str</code> | The IP address or URL to a forwarding rule of type loadBalancingScheme=INTERNAL that should handle matching packets. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.nextHopInstance">next_hop_instance</a></code> | <code>str</code> | URL to an instance that should handle matching packets. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.nextHopInstanceZone">next_hop_instance_zone</a></code> | <code>str</code> | The zone of the instance specified in next_hop_instance. Omit if next_hop_instance is specified as a URL. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.nextHopIp">next_hop_ip</a></code> | <code>str</code> | Network IP address of an instance that should handle matching packets. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.nextHopVpnTunnel">next_hop_vpn_tunnel</a></code> | <code>str</code> | URL to a VpnTunnel that should handle matching packets. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The priority of this route. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#project GoogleComputeRoute#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | A list of instance tags to which this route applies. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeouts">GoogleComputeRouteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dest_range`<sup>Required</sup> <a name="dest_range" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.destRange"></a>

```python
dest_range: str
```

- *Type:* str

The destination range of outgoing packets that this route applies to. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#dest_range GoogleComputeRoute#dest_range}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#name GoogleComputeRoute#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The network that this route applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#network GoogleComputeRoute#network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#description GoogleComputeRoute#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#id GoogleComputeRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `next_hop_gateway`<sup>Optional</sup> <a name="next_hop_gateway" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.nextHopGateway"></a>

```python
next_hop_gateway: str
```

- *Type:* str

URL to a gateway that should handle matching packets.

Currently, you can only specify the internet gateway, using a full or
partial valid URL:

* 'https://www.googleapis.com/compute/v1/projects/project/global/gateways/default-internet-gateway'
* 'projects/project/global/gateways/default-internet-gateway'
* 'global/gateways/default-internet-gateway'
* The string 'default-internet-gateway'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#next_hop_gateway GoogleComputeRoute#next_hop_gateway}

---

##### `next_hop_ilb`<sup>Optional</sup> <a name="next_hop_ilb" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.nextHopIlb"></a>

```python
next_hop_ilb: str
```

- *Type:* str

The IP address or URL to a forwarding rule of type loadBalancingScheme=INTERNAL that should handle matching packets.

With the GA provider you can only specify the forwarding
rule as a partial or full URL. For example, the following
are all valid values:

* 10.128.0.56
* https://www.googleapis.com/compute/v1/projects/project/regions/region/forwardingRules/forwardingRule
* regions/region/forwardingRules/forwardingRule

When the beta provider, you can also specify the IP address
of a forwarding rule from the same VPC or any peered VPC.

Note that this can only be used when the destinationRange is
a public (non-RFC 1918) IP CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#next_hop_ilb GoogleComputeRoute#next_hop_ilb}

---

##### `next_hop_instance`<sup>Optional</sup> <a name="next_hop_instance" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.nextHopInstance"></a>

```python
next_hop_instance: str
```

- *Type:* str

URL to an instance that should handle matching packets.

You can specify this as a full or partial URL. For example:

* 'https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/instance'
* 'projects/project/zones/zone/instances/instance'
* 'zones/zone/instances/instance'
* Just the instance name, with the zone in 'next_hop_instance_zone'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#next_hop_instance GoogleComputeRoute#next_hop_instance}

---

##### `next_hop_instance_zone`<sup>Optional</sup> <a name="next_hop_instance_zone" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.nextHopInstanceZone"></a>

```python
next_hop_instance_zone: str
```

- *Type:* str

The zone of the instance specified in next_hop_instance. Omit if next_hop_instance is specified as a URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#next_hop_instance_zone GoogleComputeRoute#next_hop_instance_zone}

---

##### `next_hop_ip`<sup>Optional</sup> <a name="next_hop_ip" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.nextHopIp"></a>

```python
next_hop_ip: str
```

- *Type:* str

Network IP address of an instance that should handle matching packets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#next_hop_ip GoogleComputeRoute#next_hop_ip}

---

##### `next_hop_vpn_tunnel`<sup>Optional</sup> <a name="next_hop_vpn_tunnel" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.nextHopVpnTunnel"></a>

```python
next_hop_vpn_tunnel: str
```

- *Type:* str

URL to a VpnTunnel that should handle matching packets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#next_hop_vpn_tunnel GoogleComputeRoute#next_hop_vpn_tunnel}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The priority of this route.

Priority is used to break ties in cases
where there is more than one matching route of equal prefix length.

In the case of two routes with equal prefix length, the one with the
lowest-numbered priority value wins.

Default value is 1000. Valid range is 0 through 65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#priority GoogleComputeRoute#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#project GoogleComputeRoute#project}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

A list of instance tags to which this route applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#tags GoogleComputeRoute#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeRouteTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeouts">GoogleComputeRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#timeouts GoogleComputeRoute#timeouts}

---

### GoogleComputeRouteTimeouts <a name="GoogleComputeRouteTimeouts" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_route

googleComputeRoute.GoogleComputeRouteTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#create GoogleComputeRoute#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#delete GoogleComputeRoute#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#create GoogleComputeRoute#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_route#delete GoogleComputeRoute#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRouteTimeoutsOutputReference <a name="GoogleComputeRouteTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_route

googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeouts">GoogleComputeRouteTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeRouteTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRoute.GoogleComputeRouteTimeouts">GoogleComputeRouteTimeouts</a>]

---



