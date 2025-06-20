# `googleComputeVpnTunnel` Submodule <a name="`googleComputeVpnTunnel` Submodule" id="@cdktf/provider-google-beta.googleComputeVpnTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeVpnTunnel <a name="GoogleComputeVpnTunnel" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel google_compute_vpn_tunnel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_vpn_tunnel

googleComputeVpnTunnel.GoogleComputeVpnTunnel(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  shared_secret: str,
  cipher_suite: GoogleComputeVpnTunnelCipherSuite = None,
  description: str = None,
  id: str = None,
  ike_version: typing.Union[int, float] = None,
  labels: typing.Mapping[str] = None,
  local_traffic_selector: typing.List[str] = None,
  peer_external_gateway: str = None,
  peer_external_gateway_interface: typing.Union[int, float] = None,
  peer_gcp_gateway: str = None,
  peer_ip: str = None,
  project: str = None,
  region: str = None,
  remote_traffic_selector: typing.List[str] = None,
  router: str = None,
  target_vpn_gateway: str = None,
  timeouts: GoogleComputeVpnTunnelTimeouts = None,
  vpn_gateway: str = None,
  vpn_gateway_interface: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.sharedSecret">shared_secret</a></code> | <code>str</code> | Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.cipherSuite">cipher_suite</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite">GoogleComputeVpnTunnelCipherSuite</a></code> | cipher_suite block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#id GoogleComputeVpnTunnel#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.ikeVersion">ike_version</a></code> | <code>typing.Union[int, float]</code> | IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this VpnTunnel. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.localTrafficSelector">local_traffic_selector</a></code> | <code>typing.List[str]</code> | Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.peerExternalGateway">peer_external_gateway</a></code> | <code>str</code> | URL of the peer side external VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.peerExternalGatewayInterface">peer_external_gateway_interface</a></code> | <code>typing.Union[int, float]</code> | The interface ID of the external VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.peerGcpGateway">peer_gcp_gateway</a></code> | <code>str</code> | URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.peerIp">peer_ip</a></code> | <code>str</code> | IP address of the peer VPN gateway. Only IPv4 is supported. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#project GoogleComputeVpnTunnel#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.region">region</a></code> | <code>str</code> | The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.remoteTrafficSelector">remote_traffic_selector</a></code> | <code>typing.List[str]</code> | Remote traffic selector to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.router">router</a></code> | <code>str</code> | URL of router resource to be used for dynamic routing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.targetVpnGateway">target_vpn_gateway</a></code> | <code>str</code> | URL of the Target VPN gateway with which this VPN tunnel is associated. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts">GoogleComputeVpnTunnelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.vpnGateway">vpn_gateway</a></code> | <code>str</code> | URL of the VPN gateway with which this VPN tunnel is associated. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.vpnGatewayInterface">vpn_gateway_interface</a></code> | <code>typing.Union[int, float]</code> | The interface ID of the VPN gateway with which this VPN tunnel is associated. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63
characters long and match the regular expression
'[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first character
must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#name GoogleComputeVpnTunnel#name}

---

##### `shared_secret`<sup>Required</sup> <a name="shared_secret" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.sharedSecret"></a>

- *Type:* str

Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#shared_secret GoogleComputeVpnTunnel#shared_secret}

---

##### `cipher_suite`<sup>Optional</sup> <a name="cipher_suite" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.cipherSuite"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite">GoogleComputeVpnTunnelCipherSuite</a>

cipher_suite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#cipher_suite GoogleComputeVpnTunnel#cipher_suite}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#description GoogleComputeVpnTunnel#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#id GoogleComputeVpnTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ike_version`<sup>Optional</sup> <a name="ike_version" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.ikeVersion"></a>

- *Type:* typing.Union[int, float]

IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway.

Acceptable IKE versions are 1 or 2. Default version is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#ike_version GoogleComputeVpnTunnel#ike_version}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels to apply to this VpnTunnel.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#labels GoogleComputeVpnTunnel#labels}

---

##### `local_traffic_selector`<sup>Optional</sup> <a name="local_traffic_selector" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.localTrafficSelector"></a>

- *Type:* typing.List[str]

Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway.

The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#local_traffic_selector GoogleComputeVpnTunnel#local_traffic_selector}

---

##### `peer_external_gateway`<sup>Optional</sup> <a name="peer_external_gateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.peerExternalGateway"></a>

- *Type:* str

URL of the peer side external VPN gateway to which this VPN tunnel is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#peer_external_gateway GoogleComputeVpnTunnel#peer_external_gateway}

---

##### `peer_external_gateway_interface`<sup>Optional</sup> <a name="peer_external_gateway_interface" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.peerExternalGatewayInterface"></a>

- *Type:* typing.Union[int, float]

The interface ID of the external VPN gateway to which this VPN tunnel is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#peer_external_gateway_interface GoogleComputeVpnTunnel#peer_external_gateway_interface}

---

##### `peer_gcp_gateway`<sup>Optional</sup> <a name="peer_gcp_gateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.peerGcpGateway"></a>

- *Type:* str

URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected.

If provided, the VPN tunnel will automatically use the same vpn_gateway_interface
ID in the peer GCP VPN gateway.
This field must reference a 'google_compute_ha_vpn_gateway' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#peer_gcp_gateway GoogleComputeVpnTunnel#peer_gcp_gateway}

---

##### `peer_ip`<sup>Optional</sup> <a name="peer_ip" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.peerIp"></a>

- *Type:* str

IP address of the peer VPN gateway. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#peer_ip GoogleComputeVpnTunnel#peer_ip}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#project GoogleComputeVpnTunnel#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.region"></a>

- *Type:* str

The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#region GoogleComputeVpnTunnel#region}

---

##### `remote_traffic_selector`<sup>Optional</sup> <a name="remote_traffic_selector" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.remoteTrafficSelector"></a>

- *Type:* typing.List[str]

Remote traffic selector to use when establishing the VPN tunnel with peer VPN gateway.

The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#remote_traffic_selector GoogleComputeVpnTunnel#remote_traffic_selector}

---

##### `router`<sup>Optional</sup> <a name="router" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.router"></a>

- *Type:* str

URL of router resource to be used for dynamic routing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#router GoogleComputeVpnTunnel#router}

---

##### `target_vpn_gateway`<sup>Optional</sup> <a name="target_vpn_gateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.targetVpnGateway"></a>

- *Type:* str

URL of the Target VPN gateway with which this VPN tunnel is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#target_vpn_gateway GoogleComputeVpnTunnel#target_vpn_gateway}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts">GoogleComputeVpnTunnelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#timeouts GoogleComputeVpnTunnel#timeouts}

---

##### `vpn_gateway`<sup>Optional</sup> <a name="vpn_gateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.vpnGateway"></a>

- *Type:* str

URL of the VPN gateway with which this VPN tunnel is associated.

This must be used if a High Availability VPN gateway resource is created.
This field must reference a 'google_compute_ha_vpn_gateway' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#vpn_gateway GoogleComputeVpnTunnel#vpn_gateway}

---

##### `vpn_gateway_interface`<sup>Optional</sup> <a name="vpn_gateway_interface" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.vpnGatewayInterface"></a>

- *Type:* typing.Union[int, float]

The interface ID of the VPN gateway with which this VPN tunnel is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#vpn_gateway_interface GoogleComputeVpnTunnel#vpn_gateway_interface}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.putCipherSuite">put_cipher_suite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetCipherSuite">reset_cipher_suite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetIkeVersion">reset_ike_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetLocalTrafficSelector">reset_local_traffic_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetPeerExternalGateway">reset_peer_external_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetPeerExternalGatewayInterface">reset_peer_external_gateway_interface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetPeerGcpGateway">reset_peer_gcp_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetPeerIp">reset_peer_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetRemoteTrafficSelector">reset_remote_traffic_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetRouter">reset_router</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetTargetVpnGateway">reset_target_vpn_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetVpnGateway">reset_vpn_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetVpnGatewayInterface">reset_vpn_gateway_interface</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cipher_suite` <a name="put_cipher_suite" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.putCipherSuite"></a>

```python
def put_cipher_suite(
  phase1: GoogleComputeVpnTunnelCipherSuitePhase1 = None,
  phase2: GoogleComputeVpnTunnelCipherSuitePhase2 = None
) -> None
```

###### `phase1`<sup>Optional</sup> <a name="phase1" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.putCipherSuite.parameter.phase1"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1">GoogleComputeVpnTunnelCipherSuitePhase1</a>

phase1 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#phase1 GoogleComputeVpnTunnel#phase1}

---

###### `phase2`<sup>Optional</sup> <a name="phase2" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.putCipherSuite.parameter.phase2"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2">GoogleComputeVpnTunnelCipherSuitePhase2</a>

phase2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#phase2 GoogleComputeVpnTunnel#phase2}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#create GoogleComputeVpnTunnel#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#delete GoogleComputeVpnTunnel#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#update GoogleComputeVpnTunnel#update}.

---

##### `reset_cipher_suite` <a name="reset_cipher_suite" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetCipherSuite"></a>

```python
def reset_cipher_suite() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ike_version` <a name="reset_ike_version" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetIkeVersion"></a>

```python
def reset_ike_version() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_local_traffic_selector` <a name="reset_local_traffic_selector" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetLocalTrafficSelector"></a>

```python
def reset_local_traffic_selector() -> None
```

##### `reset_peer_external_gateway` <a name="reset_peer_external_gateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetPeerExternalGateway"></a>

```python
def reset_peer_external_gateway() -> None
```

##### `reset_peer_external_gateway_interface` <a name="reset_peer_external_gateway_interface" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetPeerExternalGatewayInterface"></a>

```python
def reset_peer_external_gateway_interface() -> None
```

##### `reset_peer_gcp_gateway` <a name="reset_peer_gcp_gateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetPeerGcpGateway"></a>

```python
def reset_peer_gcp_gateway() -> None
```

##### `reset_peer_ip` <a name="reset_peer_ip" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetPeerIp"></a>

```python
def reset_peer_ip() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_remote_traffic_selector` <a name="reset_remote_traffic_selector" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetRemoteTrafficSelector"></a>

```python
def reset_remote_traffic_selector() -> None
```

##### `reset_router` <a name="reset_router" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetRouter"></a>

```python
def reset_router() -> None
```

##### `reset_target_vpn_gateway` <a name="reset_target_vpn_gateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetTargetVpnGateway"></a>

```python
def reset_target_vpn_gateway() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vpn_gateway` <a name="reset_vpn_gateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetVpnGateway"></a>

```python
def reset_vpn_gateway() -> None
```

##### `reset_vpn_gateway_interface` <a name="reset_vpn_gateway_interface" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetVpnGatewayInterface"></a>

```python
def reset_vpn_gateway_interface() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleComputeVpnTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_vpn_tunnel

googleComputeVpnTunnel.GoogleComputeVpnTunnel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_vpn_tunnel

googleComputeVpnTunnel.GoogleComputeVpnTunnel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_vpn_tunnel

googleComputeVpnTunnel.GoogleComputeVpnTunnel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_vpn_tunnel

googleComputeVpnTunnel.GoogleComputeVpnTunnel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleComputeVpnTunnel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeVpnTunnel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeVpnTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeVpnTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.cipherSuite">cipher_suite</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference">GoogleComputeVpnTunnelCipherSuiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.detailedStatus">detailed_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.labelFingerprint">label_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.sharedSecretHash">shared_secret_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference">GoogleComputeVpnTunnelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.tunnelId">tunnel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.cipherSuiteInput">cipher_suite_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite">GoogleComputeVpnTunnelCipherSuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.ikeVersionInput">ike_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.localTrafficSelectorInput">local_traffic_selector_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerExternalGatewayInput">peer_external_gateway_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerExternalGatewayInterfaceInput">peer_external_gateway_interface_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerGcpGatewayInput">peer_gcp_gateway_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerIpInput">peer_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.remoteTrafficSelectorInput">remote_traffic_selector_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.routerInput">router_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.sharedSecretInput">shared_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.targetVpnGatewayInput">target_vpn_gateway_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts">GoogleComputeVpnTunnelTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.vpnGatewayInput">vpn_gateway_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.vpnGatewayInterfaceInput">vpn_gateway_interface_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.ikeVersion">ike_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.localTrafficSelector">local_traffic_selector</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerExternalGateway">peer_external_gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerExternalGatewayInterface">peer_external_gateway_interface</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerGcpGateway">peer_gcp_gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerIp">peer_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.remoteTrafficSelector">remote_traffic_selector</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.router">router</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.sharedSecret">shared_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.targetVpnGateway">target_vpn_gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.vpnGateway">vpn_gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.vpnGatewayInterface">vpn_gateway_interface</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cipher_suite`<sup>Required</sup> <a name="cipher_suite" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.cipherSuite"></a>

```python
cipher_suite: GoogleComputeVpnTunnelCipherSuiteOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference">GoogleComputeVpnTunnelCipherSuiteOutputReference</a>

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `detailed_status`<sup>Required</sup> <a name="detailed_status" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.detailedStatus"></a>

```python
detailed_status: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `label_fingerprint`<sup>Required</sup> <a name="label_fingerprint" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.labelFingerprint"></a>

```python
label_fingerprint: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `shared_secret_hash`<sup>Required</sup> <a name="shared_secret_hash" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.sharedSecretHash"></a>

```python
shared_secret_hash: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.timeouts"></a>

```python
timeouts: GoogleComputeVpnTunnelTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference">GoogleComputeVpnTunnelTimeoutsOutputReference</a>

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.tunnelId"></a>

```python
tunnel_id: str
```

- *Type:* str

---

##### `cipher_suite_input`<sup>Optional</sup> <a name="cipher_suite_input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.cipherSuiteInput"></a>

```python
cipher_suite_input: GoogleComputeVpnTunnelCipherSuite
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite">GoogleComputeVpnTunnelCipherSuite</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ike_version_input`<sup>Optional</sup> <a name="ike_version_input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.ikeVersionInput"></a>

```python
ike_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `local_traffic_selector_input`<sup>Optional</sup> <a name="local_traffic_selector_input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.localTrafficSelectorInput"></a>

```python
local_traffic_selector_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `peer_external_gateway_input`<sup>Optional</sup> <a name="peer_external_gateway_input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerExternalGatewayInput"></a>

```python
peer_external_gateway_input: str
```

- *Type:* str

---

##### `peer_external_gateway_interface_input`<sup>Optional</sup> <a name="peer_external_gateway_interface_input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerExternalGatewayInterfaceInput"></a>

```python
peer_external_gateway_interface_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peer_gcp_gateway_input`<sup>Optional</sup> <a name="peer_gcp_gateway_input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerGcpGatewayInput"></a>

```python
peer_gcp_gateway_input: str
```

- *Type:* str

---

##### `peer_ip_input`<sup>Optional</sup> <a name="peer_ip_input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerIpInput"></a>

```python
peer_ip_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `remote_traffic_selector_input`<sup>Optional</sup> <a name="remote_traffic_selector_input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.remoteTrafficSelectorInput"></a>

```python
remote_traffic_selector_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `router_input`<sup>Optional</sup> <a name="router_input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.routerInput"></a>

```python
router_input: str
```

- *Type:* str

---

##### `shared_secret_input`<sup>Optional</sup> <a name="shared_secret_input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.sharedSecretInput"></a>

```python
shared_secret_input: str
```

- *Type:* str

---

##### `target_vpn_gateway_input`<sup>Optional</sup> <a name="target_vpn_gateway_input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.targetVpnGatewayInput"></a>

```python
target_vpn_gateway_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleComputeVpnTunnelTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts">GoogleComputeVpnTunnelTimeouts</a>]

---

##### `vpn_gateway_input`<sup>Optional</sup> <a name="vpn_gateway_input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.vpnGatewayInput"></a>

```python
vpn_gateway_input: str
```

- *Type:* str

---

##### `vpn_gateway_interface_input`<sup>Optional</sup> <a name="vpn_gateway_interface_input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.vpnGatewayInterfaceInput"></a>

```python
vpn_gateway_interface_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ike_version`<sup>Required</sup> <a name="ike_version" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.ikeVersion"></a>

```python
ike_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `local_traffic_selector`<sup>Required</sup> <a name="local_traffic_selector" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.localTrafficSelector"></a>

```python
local_traffic_selector: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `peer_external_gateway`<sup>Required</sup> <a name="peer_external_gateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerExternalGateway"></a>

```python
peer_external_gateway: str
```

- *Type:* str

---

##### `peer_external_gateway_interface`<sup>Required</sup> <a name="peer_external_gateway_interface" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerExternalGatewayInterface"></a>

```python
peer_external_gateway_interface: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peer_gcp_gateway`<sup>Required</sup> <a name="peer_gcp_gateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerGcpGateway"></a>

```python
peer_gcp_gateway: str
```

- *Type:* str

---

##### `peer_ip`<sup>Required</sup> <a name="peer_ip" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerIp"></a>

```python
peer_ip: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `remote_traffic_selector`<sup>Required</sup> <a name="remote_traffic_selector" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.remoteTrafficSelector"></a>

```python
remote_traffic_selector: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.router"></a>

```python
router: str
```

- *Type:* str

---

##### `shared_secret`<sup>Required</sup> <a name="shared_secret" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.sharedSecret"></a>

```python
shared_secret: str
```

- *Type:* str

---

##### `target_vpn_gateway`<sup>Required</sup> <a name="target_vpn_gateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.targetVpnGateway"></a>

```python
target_vpn_gateway: str
```

- *Type:* str

---

##### `vpn_gateway`<sup>Required</sup> <a name="vpn_gateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.vpnGateway"></a>

```python
vpn_gateway: str
```

- *Type:* str

---

##### `vpn_gateway_interface`<sup>Required</sup> <a name="vpn_gateway_interface" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.vpnGatewayInterface"></a>

```python
vpn_gateway_interface: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeVpnTunnelCipherSuite <a name="GoogleComputeVpnTunnelCipherSuite" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_vpn_tunnel

googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite(
  phase1: GoogleComputeVpnTunnelCipherSuitePhase1 = None,
  phase2: GoogleComputeVpnTunnelCipherSuitePhase2 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite.property.phase1">phase1</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1">GoogleComputeVpnTunnelCipherSuitePhase1</a></code> | phase1 block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite.property.phase2">phase2</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2">GoogleComputeVpnTunnelCipherSuitePhase2</a></code> | phase2 block. |

---

##### `phase1`<sup>Optional</sup> <a name="phase1" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite.property.phase1"></a>

```python
phase1: GoogleComputeVpnTunnelCipherSuitePhase1
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1">GoogleComputeVpnTunnelCipherSuitePhase1</a>

phase1 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#phase1 GoogleComputeVpnTunnel#phase1}

---

##### `phase2`<sup>Optional</sup> <a name="phase2" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite.property.phase2"></a>

```python
phase2: GoogleComputeVpnTunnelCipherSuitePhase2
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2">GoogleComputeVpnTunnelCipherSuitePhase2</a>

phase2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#phase2 GoogleComputeVpnTunnel#phase2}

---

### GoogleComputeVpnTunnelCipherSuitePhase1 <a name="GoogleComputeVpnTunnelCipherSuitePhase1" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_vpn_tunnel

googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1(
  dh: typing.List[str] = None,
  encryption: typing.List[str] = None,
  integrity: typing.List[str] = None,
  prf: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1.property.dh">dh</a></code> | <code>typing.List[str]</code> | Diffie-Hellman groups. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1.property.encryption">encryption</a></code> | <code>typing.List[str]</code> | Encryption algorithms. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1.property.integrity">integrity</a></code> | <code>typing.List[str]</code> | Integrity algorithms. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1.property.prf">prf</a></code> | <code>typing.List[str]</code> | Pseudo-random functions. |

---

##### `dh`<sup>Optional</sup> <a name="dh" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1.property.dh"></a>

```python
dh: typing.List[str]
```

- *Type:* typing.List[str]

Diffie-Hellman groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#dh GoogleComputeVpnTunnel#dh}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1.property.encryption"></a>

```python
encryption: typing.List[str]
```

- *Type:* typing.List[str]

Encryption algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#encryption GoogleComputeVpnTunnel#encryption}

---

##### `integrity`<sup>Optional</sup> <a name="integrity" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1.property.integrity"></a>

```python
integrity: typing.List[str]
```

- *Type:* typing.List[str]

Integrity algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#integrity GoogleComputeVpnTunnel#integrity}

---

##### `prf`<sup>Optional</sup> <a name="prf" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1.property.prf"></a>

```python
prf: typing.List[str]
```

- *Type:* typing.List[str]

Pseudo-random functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#prf GoogleComputeVpnTunnel#prf}

---

### GoogleComputeVpnTunnelCipherSuitePhase2 <a name="GoogleComputeVpnTunnelCipherSuitePhase2" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_vpn_tunnel

googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2(
  encryption: typing.List[str] = None,
  integrity: typing.List[str] = None,
  pfs: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2.property.encryption">encryption</a></code> | <code>typing.List[str]</code> | Encryption algorithms. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2.property.integrity">integrity</a></code> | <code>typing.List[str]</code> | Integrity algorithms. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2.property.pfs">pfs</a></code> | <code>typing.List[str]</code> | Perfect forward secrecy groups. |

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2.property.encryption"></a>

```python
encryption: typing.List[str]
```

- *Type:* typing.List[str]

Encryption algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#encryption GoogleComputeVpnTunnel#encryption}

---

##### `integrity`<sup>Optional</sup> <a name="integrity" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2.property.integrity"></a>

```python
integrity: typing.List[str]
```

- *Type:* typing.List[str]

Integrity algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#integrity GoogleComputeVpnTunnel#integrity}

---

##### `pfs`<sup>Optional</sup> <a name="pfs" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2.property.pfs"></a>

```python
pfs: typing.List[str]
```

- *Type:* typing.List[str]

Perfect forward secrecy groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#pfs GoogleComputeVpnTunnel#pfs}

---

### GoogleComputeVpnTunnelConfig <a name="GoogleComputeVpnTunnelConfig" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_vpn_tunnel

googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  shared_secret: str,
  cipher_suite: GoogleComputeVpnTunnelCipherSuite = None,
  description: str = None,
  id: str = None,
  ike_version: typing.Union[int, float] = None,
  labels: typing.Mapping[str] = None,
  local_traffic_selector: typing.List[str] = None,
  peer_external_gateway: str = None,
  peer_external_gateway_interface: typing.Union[int, float] = None,
  peer_gcp_gateway: str = None,
  peer_ip: str = None,
  project: str = None,
  region: str = None,
  remote_traffic_selector: typing.List[str] = None,
  router: str = None,
  target_vpn_gateway: str = None,
  timeouts: GoogleComputeVpnTunnelTimeouts = None,
  vpn_gateway: str = None,
  vpn_gateway_interface: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.sharedSecret">shared_secret</a></code> | <code>str</code> | Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.cipherSuite">cipher_suite</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite">GoogleComputeVpnTunnelCipherSuite</a></code> | cipher_suite block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#id GoogleComputeVpnTunnel#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.ikeVersion">ike_version</a></code> | <code>typing.Union[int, float]</code> | IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this VpnTunnel. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.localTrafficSelector">local_traffic_selector</a></code> | <code>typing.List[str]</code> | Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.peerExternalGateway">peer_external_gateway</a></code> | <code>str</code> | URL of the peer side external VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.peerExternalGatewayInterface">peer_external_gateway_interface</a></code> | <code>typing.Union[int, float]</code> | The interface ID of the external VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.peerGcpGateway">peer_gcp_gateway</a></code> | <code>str</code> | URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.peerIp">peer_ip</a></code> | <code>str</code> | IP address of the peer VPN gateway. Only IPv4 is supported. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#project GoogleComputeVpnTunnel#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.region">region</a></code> | <code>str</code> | The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.remoteTrafficSelector">remote_traffic_selector</a></code> | <code>typing.List[str]</code> | Remote traffic selector to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.router">router</a></code> | <code>str</code> | URL of router resource to be used for dynamic routing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.targetVpnGateway">target_vpn_gateway</a></code> | <code>str</code> | URL of the Target VPN gateway with which this VPN tunnel is associated. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts">GoogleComputeVpnTunnelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.vpnGateway">vpn_gateway</a></code> | <code>str</code> | URL of the VPN gateway with which this VPN tunnel is associated. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.vpnGatewayInterface">vpn_gateway_interface</a></code> | <code>typing.Union[int, float]</code> | The interface ID of the VPN gateway with which this VPN tunnel is associated. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63
characters long and match the regular expression
'[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first character
must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#name GoogleComputeVpnTunnel#name}

---

##### `shared_secret`<sup>Required</sup> <a name="shared_secret" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.sharedSecret"></a>

```python
shared_secret: str
```

- *Type:* str

Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#shared_secret GoogleComputeVpnTunnel#shared_secret}

---

##### `cipher_suite`<sup>Optional</sup> <a name="cipher_suite" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.cipherSuite"></a>

```python
cipher_suite: GoogleComputeVpnTunnelCipherSuite
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite">GoogleComputeVpnTunnelCipherSuite</a>

cipher_suite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#cipher_suite GoogleComputeVpnTunnel#cipher_suite}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#description GoogleComputeVpnTunnel#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#id GoogleComputeVpnTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ike_version`<sup>Optional</sup> <a name="ike_version" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.ikeVersion"></a>

```python
ike_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway.

Acceptable IKE versions are 1 or 2. Default version is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#ike_version GoogleComputeVpnTunnel#ike_version}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels to apply to this VpnTunnel.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#labels GoogleComputeVpnTunnel#labels}

---

##### `local_traffic_selector`<sup>Optional</sup> <a name="local_traffic_selector" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.localTrafficSelector"></a>

```python
local_traffic_selector: typing.List[str]
```

- *Type:* typing.List[str]

Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway.

The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#local_traffic_selector GoogleComputeVpnTunnel#local_traffic_selector}

---

##### `peer_external_gateway`<sup>Optional</sup> <a name="peer_external_gateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.peerExternalGateway"></a>

```python
peer_external_gateway: str
```

- *Type:* str

URL of the peer side external VPN gateway to which this VPN tunnel is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#peer_external_gateway GoogleComputeVpnTunnel#peer_external_gateway}

---

##### `peer_external_gateway_interface`<sup>Optional</sup> <a name="peer_external_gateway_interface" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.peerExternalGatewayInterface"></a>

```python
peer_external_gateway_interface: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The interface ID of the external VPN gateway to which this VPN tunnel is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#peer_external_gateway_interface GoogleComputeVpnTunnel#peer_external_gateway_interface}

---

##### `peer_gcp_gateway`<sup>Optional</sup> <a name="peer_gcp_gateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.peerGcpGateway"></a>

```python
peer_gcp_gateway: str
```

- *Type:* str

URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected.

If provided, the VPN tunnel will automatically use the same vpn_gateway_interface
ID in the peer GCP VPN gateway.
This field must reference a 'google_compute_ha_vpn_gateway' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#peer_gcp_gateway GoogleComputeVpnTunnel#peer_gcp_gateway}

---

##### `peer_ip`<sup>Optional</sup> <a name="peer_ip" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.peerIp"></a>

```python
peer_ip: str
```

- *Type:* str

IP address of the peer VPN gateway. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#peer_ip GoogleComputeVpnTunnel#peer_ip}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#project GoogleComputeVpnTunnel#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#region GoogleComputeVpnTunnel#region}

---

##### `remote_traffic_selector`<sup>Optional</sup> <a name="remote_traffic_selector" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.remoteTrafficSelector"></a>

```python
remote_traffic_selector: typing.List[str]
```

- *Type:* typing.List[str]

Remote traffic selector to use when establishing the VPN tunnel with peer VPN gateway.

The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#remote_traffic_selector GoogleComputeVpnTunnel#remote_traffic_selector}

---

##### `router`<sup>Optional</sup> <a name="router" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.router"></a>

```python
router: str
```

- *Type:* str

URL of router resource to be used for dynamic routing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#router GoogleComputeVpnTunnel#router}

---

##### `target_vpn_gateway`<sup>Optional</sup> <a name="target_vpn_gateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.targetVpnGateway"></a>

```python
target_vpn_gateway: str
```

- *Type:* str

URL of the Target VPN gateway with which this VPN tunnel is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#target_vpn_gateway GoogleComputeVpnTunnel#target_vpn_gateway}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeVpnTunnelTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts">GoogleComputeVpnTunnelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#timeouts GoogleComputeVpnTunnel#timeouts}

---

##### `vpn_gateway`<sup>Optional</sup> <a name="vpn_gateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.vpnGateway"></a>

```python
vpn_gateway: str
```

- *Type:* str

URL of the VPN gateway with which this VPN tunnel is associated.

This must be used if a High Availability VPN gateway resource is created.
This field must reference a 'google_compute_ha_vpn_gateway' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#vpn_gateway GoogleComputeVpnTunnel#vpn_gateway}

---

##### `vpn_gateway_interface`<sup>Optional</sup> <a name="vpn_gateway_interface" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.vpnGatewayInterface"></a>

```python
vpn_gateway_interface: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The interface ID of the VPN gateway with which this VPN tunnel is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#vpn_gateway_interface GoogleComputeVpnTunnel#vpn_gateway_interface}

---

### GoogleComputeVpnTunnelTimeouts <a name="GoogleComputeVpnTunnelTimeouts" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_vpn_tunnel

googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#create GoogleComputeVpnTunnel#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#delete GoogleComputeVpnTunnel#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#update GoogleComputeVpnTunnel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#create GoogleComputeVpnTunnel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#delete GoogleComputeVpnTunnel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#update GoogleComputeVpnTunnel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeVpnTunnelCipherSuiteOutputReference <a name="GoogleComputeVpnTunnelCipherSuiteOutputReference" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_vpn_tunnel

googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.putPhase1">put_phase1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.putPhase2">put_phase2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.resetPhase1">reset_phase1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.resetPhase2">reset_phase2</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_phase1` <a name="put_phase1" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.putPhase1"></a>

```python
def put_phase1(
  dh: typing.List[str] = None,
  encryption: typing.List[str] = None,
  integrity: typing.List[str] = None,
  prf: typing.List[str] = None
) -> None
```

###### `dh`<sup>Optional</sup> <a name="dh" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.putPhase1.parameter.dh"></a>

- *Type:* typing.List[str]

Diffie-Hellman groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#dh GoogleComputeVpnTunnel#dh}

---

###### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.putPhase1.parameter.encryption"></a>

- *Type:* typing.List[str]

Encryption algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#encryption GoogleComputeVpnTunnel#encryption}

---

###### `integrity`<sup>Optional</sup> <a name="integrity" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.putPhase1.parameter.integrity"></a>

- *Type:* typing.List[str]

Integrity algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#integrity GoogleComputeVpnTunnel#integrity}

---

###### `prf`<sup>Optional</sup> <a name="prf" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.putPhase1.parameter.prf"></a>

- *Type:* typing.List[str]

Pseudo-random functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#prf GoogleComputeVpnTunnel#prf}

---

##### `put_phase2` <a name="put_phase2" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.putPhase2"></a>

```python
def put_phase2(
  encryption: typing.List[str] = None,
  integrity: typing.List[str] = None,
  pfs: typing.List[str] = None
) -> None
```

###### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.putPhase2.parameter.encryption"></a>

- *Type:* typing.List[str]

Encryption algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#encryption GoogleComputeVpnTunnel#encryption}

---

###### `integrity`<sup>Optional</sup> <a name="integrity" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.putPhase2.parameter.integrity"></a>

- *Type:* typing.List[str]

Integrity algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#integrity GoogleComputeVpnTunnel#integrity}

---

###### `pfs`<sup>Optional</sup> <a name="pfs" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.putPhase2.parameter.pfs"></a>

- *Type:* typing.List[str]

Perfect forward secrecy groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_vpn_tunnel#pfs GoogleComputeVpnTunnel#pfs}

---

##### `reset_phase1` <a name="reset_phase1" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.resetPhase1"></a>

```python
def reset_phase1() -> None
```

##### `reset_phase2` <a name="reset_phase2" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.resetPhase2"></a>

```python
def reset_phase2() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.phase1">phase1</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference">GoogleComputeVpnTunnelCipherSuitePhase1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.phase2">phase2</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference">GoogleComputeVpnTunnelCipherSuitePhase2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.phase1Input">phase1_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1">GoogleComputeVpnTunnelCipherSuitePhase1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.phase2Input">phase2_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2">GoogleComputeVpnTunnelCipherSuitePhase2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite">GoogleComputeVpnTunnelCipherSuite</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `phase1`<sup>Required</sup> <a name="phase1" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.phase1"></a>

```python
phase1: GoogleComputeVpnTunnelCipherSuitePhase1OutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference">GoogleComputeVpnTunnelCipherSuitePhase1OutputReference</a>

---

##### `phase2`<sup>Required</sup> <a name="phase2" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.phase2"></a>

```python
phase2: GoogleComputeVpnTunnelCipherSuitePhase2OutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference">GoogleComputeVpnTunnelCipherSuitePhase2OutputReference</a>

---

##### `phase1_input`<sup>Optional</sup> <a name="phase1_input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.phase1Input"></a>

```python
phase1_input: GoogleComputeVpnTunnelCipherSuitePhase1
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1">GoogleComputeVpnTunnelCipherSuitePhase1</a>

---

##### `phase2_input`<sup>Optional</sup> <a name="phase2_input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.phase2Input"></a>

```python
phase2_input: GoogleComputeVpnTunnelCipherSuitePhase2
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2">GoogleComputeVpnTunnelCipherSuitePhase2</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeVpnTunnelCipherSuite
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite">GoogleComputeVpnTunnelCipherSuite</a>

---


### GoogleComputeVpnTunnelCipherSuitePhase1OutputReference <a name="GoogleComputeVpnTunnelCipherSuitePhase1OutputReference" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_vpn_tunnel

googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resetDh">reset_dh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resetEncryption">reset_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resetIntegrity">reset_integrity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resetPrf">reset_prf</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dh` <a name="reset_dh" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resetDh"></a>

```python
def reset_dh() -> None
```

##### `reset_encryption` <a name="reset_encryption" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resetEncryption"></a>

```python
def reset_encryption() -> None
```

##### `reset_integrity` <a name="reset_integrity" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resetIntegrity"></a>

```python
def reset_integrity() -> None
```

##### `reset_prf` <a name="reset_prf" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resetPrf"></a>

```python
def reset_prf() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.dhInput">dh_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.encryptionInput">encryption_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.integrityInput">integrity_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.prfInput">prf_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.dh">dh</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.encryption">encryption</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.integrity">integrity</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.prf">prf</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1">GoogleComputeVpnTunnelCipherSuitePhase1</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dh_input`<sup>Optional</sup> <a name="dh_input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.dhInput"></a>

```python
dh_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `encryption_input`<sup>Optional</sup> <a name="encryption_input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.encryptionInput"></a>

```python
encryption_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `integrity_input`<sup>Optional</sup> <a name="integrity_input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.integrityInput"></a>

```python
integrity_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prf_input`<sup>Optional</sup> <a name="prf_input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.prfInput"></a>

```python
prf_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dh`<sup>Required</sup> <a name="dh" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.dh"></a>

```python
dh: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.encryption"></a>

```python
encryption: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `integrity`<sup>Required</sup> <a name="integrity" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.integrity"></a>

```python
integrity: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prf`<sup>Required</sup> <a name="prf" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.prf"></a>

```python
prf: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeVpnTunnelCipherSuitePhase1
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1">GoogleComputeVpnTunnelCipherSuitePhase1</a>

---


### GoogleComputeVpnTunnelCipherSuitePhase2OutputReference <a name="GoogleComputeVpnTunnelCipherSuitePhase2OutputReference" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_vpn_tunnel

googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.resetEncryption">reset_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.resetIntegrity">reset_integrity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.resetPfs">reset_pfs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encryption` <a name="reset_encryption" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.resetEncryption"></a>

```python
def reset_encryption() -> None
```

##### `reset_integrity` <a name="reset_integrity" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.resetIntegrity"></a>

```python
def reset_integrity() -> None
```

##### `reset_pfs` <a name="reset_pfs" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.resetPfs"></a>

```python
def reset_pfs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.encryptionInput">encryption_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.integrityInput">integrity_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.pfsInput">pfs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.encryption">encryption</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.integrity">integrity</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.pfs">pfs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2">GoogleComputeVpnTunnelCipherSuitePhase2</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_input`<sup>Optional</sup> <a name="encryption_input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.encryptionInput"></a>

```python
encryption_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `integrity_input`<sup>Optional</sup> <a name="integrity_input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.integrityInput"></a>

```python
integrity_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `pfs_input`<sup>Optional</sup> <a name="pfs_input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.pfsInput"></a>

```python
pfs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.encryption"></a>

```python
encryption: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `integrity`<sup>Required</sup> <a name="integrity" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.integrity"></a>

```python
integrity: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `pfs`<sup>Required</sup> <a name="pfs" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.pfs"></a>

```python
pfs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeVpnTunnelCipherSuitePhase2
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2">GoogleComputeVpnTunnelCipherSuitePhase2</a>

---


### GoogleComputeVpnTunnelTimeoutsOutputReference <a name="GoogleComputeVpnTunnelTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_vpn_tunnel

googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts">GoogleComputeVpnTunnelTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeVpnTunnelTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts">GoogleComputeVpnTunnelTimeouts</a>]

---



