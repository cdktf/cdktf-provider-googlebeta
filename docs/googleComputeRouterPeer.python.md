# `googleComputeRouterPeer` Submodule <a name="`googleComputeRouterPeer` Submodule" id="@cdktf/provider-google-beta.googleComputeRouterPeer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRouterPeer <a name="GoogleComputeRouterPeer" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer google_compute_router_peer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_peer

googleComputeRouterPeer.GoogleComputeRouterPeer(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  interface: str,
  name: str,
  peer_asn: typing.Union[int, float],
  router: str,
  advertised_groups: typing.List[str] = None,
  advertised_ip_ranges: typing.Union[IResolvable, typing.List[GoogleComputeRouterPeerAdvertisedIpRanges]] = None,
  advertised_route_priority: typing.Union[int, float] = None,
  advertise_mode: str = None,
  bfd: GoogleComputeRouterPeerBfd = None,
  custom_learned_ip_ranges: typing.Union[IResolvable, typing.List[GoogleComputeRouterPeerCustomLearnedIpRanges]] = None,
  custom_learned_route_priority: typing.Union[int, float] = None,
  enable: typing.Union[bool, IResolvable] = None,
  enable_ipv4: typing.Union[bool, IResolvable] = None,
  enable_ipv6: typing.Union[bool, IResolvable] = None,
  export_policies: typing.List[str] = None,
  id: str = None,
  import_policies: typing.List[str] = None,
  ip_address: str = None,
  ipv4_nexthop_address: str = None,
  ipv6_nexthop_address: str = None,
  md5_authentication_key: GoogleComputeRouterPeerMd5AuthenticationKey = None,
  peer_ip_address: str = None,
  peer_ipv4_nexthop_address: str = None,
  peer_ipv6_nexthop_address: str = None,
  project: str = None,
  region: str = None,
  router_appliance_instance: str = None,
  timeouts: GoogleComputeRouterPeerTimeouts = None,
  zero_advertised_route_priority: typing.Union[bool, IResolvable] = None,
  zero_custom_learned_route_priority: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.interface">interface</a></code> | <code>str</code> | Name of the interface the BGP peer is associated with. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of this BGP peer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.peerAsn">peer_asn</a></code> | <code>typing.Union[int, float]</code> | Peer BGP Autonomous System Number (ASN). Each BGP interface may use a different value. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.router">router</a></code> | <code>str</code> | The name of the Cloud Router in which this BgpPeer will be configured. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.advertisedGroups">advertised_groups</a></code> | <code>typing.List[str]</code> | User-specified list of prefix groups to advertise in custom mode, which currently supports the following option:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.advertisedIpRanges">advertised_ip_ranges</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges">GoogleComputeRouterPeerAdvertisedIpRanges</a>]]</code> | advertised_ip_ranges block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.advertisedRoutePriority">advertised_route_priority</a></code> | <code>typing.Union[int, float]</code> | The priority of routes advertised to this BGP peer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.advertiseMode">advertise_mode</a></code> | <code>str</code> | User-specified flag to indicate which mode to use for advertisement. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.bfd">bfd</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd">GoogleComputeRouterPeerBfd</a></code> | bfd block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.customLearnedIpRanges">custom_learned_ip_ranges</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges">GoogleComputeRouterPeerCustomLearnedIpRanges</a>]]</code> | custom_learned_ip_ranges block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.customLearnedRoutePriority">custom_learned_route_priority</a></code> | <code>typing.Union[int, float]</code> | The user-defined custom learned route priority for a BGP session. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The status of the BGP peer connection. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.enableIpv4">enable_ipv4</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable IPv4 traffic over BGP Peer. It is enabled by default if the peerIpAddress is version 4. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.enableIpv6">enable_ipv6</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable IPv6 traffic over BGP Peer. If not specified, it is disabled by default. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.exportPolicies">export_policies</a></code> | <code>typing.List[str]</code> | routers.list of export policies applied to this peer, in the order they must be evaluated.  The name must correspond to an existing policy that has ROUTE_POLICY_TYPE_EXPORT type. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#id GoogleComputeRouterPeer#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.importPolicies">import_policies</a></code> | <code>typing.List[str]</code> | routers.list of import policies applied to this peer, in the order they must be evaluated.  The name must correspond to an existing policy that has ROUTE_POLICY_TYPE_IMPORT type. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.ipAddress">ip_address</a></code> | <code>str</code> | IP address of the interface inside Google Cloud Platform. Only IPv4 is supported. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.ipv4NexthopAddress">ipv4_nexthop_address</a></code> | <code>str</code> | IPv4 address of the interface inside Google Cloud Platform. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.ipv6NexthopAddress">ipv6_nexthop_address</a></code> | <code>str</code> | IPv6 address of the interface inside Google Cloud Platform. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.md5AuthenticationKey">md5_authentication_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey">GoogleComputeRouterPeerMd5AuthenticationKey</a></code> | md5_authentication_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.peerIpAddress">peer_ip_address</a></code> | <code>str</code> | IP address of the BGP interface outside Google Cloud Platform. Only IPv4 is supported. Required if 'ip_address' is set. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.peerIpv4NexthopAddress">peer_ipv4_nexthop_address</a></code> | <code>str</code> | IPv4 address of the BGP interface outside Google Cloud Platform. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.peerIpv6NexthopAddress">peer_ipv6_nexthop_address</a></code> | <code>str</code> | IPv6 address of the BGP interface outside Google Cloud Platform. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#project GoogleComputeRouterPeer#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where the router and BgpPeer reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.routerApplianceInstance">router_appliance_instance</a></code> | <code>str</code> | The URI of the VM instance that is used as third-party router appliances such as Next Gen Firewalls, Virtual Routers, or Router Appliances. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts">GoogleComputeRouterPeerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.zeroAdvertisedRoutePriority">zero_advertised_route_priority</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Force the advertised_route_priority to be 0. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.zeroCustomLearnedRoutePriority">zero_custom_learned_route_priority</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Force the custom_learned_route_priority to be 0. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.interface"></a>

- *Type:* str

Name of the interface the BGP peer is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#interface GoogleComputeRouterPeer#interface}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.name"></a>

- *Type:* str

Name of this BGP peer.

The name must be 1-63 characters long,
and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#name GoogleComputeRouterPeer#name}

---

##### `peer_asn`<sup>Required</sup> <a name="peer_asn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.peerAsn"></a>

- *Type:* typing.Union[int, float]

Peer BGP Autonomous System Number (ASN). Each BGP interface may use a different value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#peer_asn GoogleComputeRouterPeer#peer_asn}

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.router"></a>

- *Type:* str

The name of the Cloud Router in which this BgpPeer will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#router GoogleComputeRouterPeer#router}

---

##### `advertised_groups`<sup>Optional</sup> <a name="advertised_groups" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.advertisedGroups"></a>

- *Type:* typing.List[str]

User-specified list of prefix groups to advertise in custom mode, which currently supports the following option:.

* 'ALL_SUBNETS': Advertises all of the router's own VPC subnets.
  This excludes any routes learned for subnets that use VPC Network
  Peering.

Note that this field can only be populated if advertiseMode is 'CUSTOM'
and overrides the list defined for the router (in the "bgp" message).
These groups are advertised in addition to any specified prefixes.
Leave this field blank to advertise no custom groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#advertised_groups GoogleComputeRouterPeer#advertised_groups}

---

##### `advertised_ip_ranges`<sup>Optional</sup> <a name="advertised_ip_ranges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.advertisedIpRanges"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges">GoogleComputeRouterPeerAdvertisedIpRanges</a>]]

advertised_ip_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#advertised_ip_ranges GoogleComputeRouterPeer#advertised_ip_ranges}

---

##### `advertised_route_priority`<sup>Optional</sup> <a name="advertised_route_priority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.advertisedRoutePriority"></a>

- *Type:* typing.Union[int, float]

The priority of routes advertised to this BGP peer.

Where there is more than one matching route of maximum
length, the routes with the lowest priority value win.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#advertised_route_priority GoogleComputeRouterPeer#advertised_route_priority}

---

##### `advertise_mode`<sup>Optional</sup> <a name="advertise_mode" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.advertiseMode"></a>

- *Type:* str

User-specified flag to indicate which mode to use for advertisement.

Valid values of this enum field are: 'DEFAULT', 'CUSTOM' Default value: "DEFAULT" Possible values: ["DEFAULT", "CUSTOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#advertise_mode GoogleComputeRouterPeer#advertise_mode}

---

##### `bfd`<sup>Optional</sup> <a name="bfd" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.bfd"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd">GoogleComputeRouterPeerBfd</a>

bfd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#bfd GoogleComputeRouterPeer#bfd}

---

##### `custom_learned_ip_ranges`<sup>Optional</sup> <a name="custom_learned_ip_ranges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.customLearnedIpRanges"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges">GoogleComputeRouterPeerCustomLearnedIpRanges</a>]]

custom_learned_ip_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#custom_learned_ip_ranges GoogleComputeRouterPeer#custom_learned_ip_ranges}

---

##### `custom_learned_route_priority`<sup>Optional</sup> <a name="custom_learned_route_priority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.customLearnedRoutePriority"></a>

- *Type:* typing.Union[int, float]

The user-defined custom learned route priority for a BGP session.

This value is applied to all custom learned route ranges for the session. You can choose a value
from 0 to 65335. If you don't provide a value, Google Cloud assigns a priority of 100 to the ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#custom_learned_route_priority GoogleComputeRouterPeer#custom_learned_route_priority}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.enable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The status of the BGP peer connection.

If set to false, any active session
with the peer is terminated and all associated routing information is removed.
If set to true, the peer connection can be established with routing information.
The default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#enable GoogleComputeRouterPeer#enable}

---

##### `enable_ipv4`<sup>Optional</sup> <a name="enable_ipv4" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.enableIpv4"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable IPv4 traffic over BGP Peer. It is enabled by default if the peerIpAddress is version 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#enable_ipv4 GoogleComputeRouterPeer#enable_ipv4}

---

##### `enable_ipv6`<sup>Optional</sup> <a name="enable_ipv6" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.enableIpv6"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable IPv6 traffic over BGP Peer. If not specified, it is disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#enable_ipv6 GoogleComputeRouterPeer#enable_ipv6}

---

##### `export_policies`<sup>Optional</sup> <a name="export_policies" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.exportPolicies"></a>

- *Type:* typing.List[str]

routers.list of export policies applied to this peer, in the order they must be evaluated.  The name must correspond to an existing policy that has ROUTE_POLICY_TYPE_EXPORT type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#export_policies GoogleComputeRouterPeer#export_policies}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#id GoogleComputeRouterPeer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `import_policies`<sup>Optional</sup> <a name="import_policies" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.importPolicies"></a>

- *Type:* typing.List[str]

routers.list of import policies applied to this peer, in the order they must be evaluated.  The name must correspond to an existing policy that has ROUTE_POLICY_TYPE_IMPORT type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#import_policies GoogleComputeRouterPeer#import_policies}

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.ipAddress"></a>

- *Type:* str

IP address of the interface inside Google Cloud Platform. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#ip_address GoogleComputeRouterPeer#ip_address}

---

##### `ipv4_nexthop_address`<sup>Optional</sup> <a name="ipv4_nexthop_address" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.ipv4NexthopAddress"></a>

- *Type:* str

IPv4 address of the interface inside Google Cloud Platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#ipv4_nexthop_address GoogleComputeRouterPeer#ipv4_nexthop_address}

---

##### `ipv6_nexthop_address`<sup>Optional</sup> <a name="ipv6_nexthop_address" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.ipv6NexthopAddress"></a>

- *Type:* str

IPv6 address of the interface inside Google Cloud Platform.

The address must be in the range 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64.
If you do not specify the next hop addresses, Google Cloud automatically
assigns unused addresses from the 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64 range for you.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#ipv6_nexthop_address GoogleComputeRouterPeer#ipv6_nexthop_address}

---

##### `md5_authentication_key`<sup>Optional</sup> <a name="md5_authentication_key" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.md5AuthenticationKey"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey">GoogleComputeRouterPeerMd5AuthenticationKey</a>

md5_authentication_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#md5_authentication_key GoogleComputeRouterPeer#md5_authentication_key}

---

##### `peer_ip_address`<sup>Optional</sup> <a name="peer_ip_address" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.peerIpAddress"></a>

- *Type:* str

IP address of the BGP interface outside Google Cloud Platform. Only IPv4 is supported. Required if 'ip_address' is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#peer_ip_address GoogleComputeRouterPeer#peer_ip_address}

---

##### `peer_ipv4_nexthop_address`<sup>Optional</sup> <a name="peer_ipv4_nexthop_address" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.peerIpv4NexthopAddress"></a>

- *Type:* str

IPv4 address of the BGP interface outside Google Cloud Platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#peer_ipv4_nexthop_address GoogleComputeRouterPeer#peer_ipv4_nexthop_address}

---

##### `peer_ipv6_nexthop_address`<sup>Optional</sup> <a name="peer_ipv6_nexthop_address" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.peerIpv6NexthopAddress"></a>

- *Type:* str

IPv6 address of the BGP interface outside Google Cloud Platform.

The address must be in the range 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64.
If you do not specify the next hop addresses, Google Cloud automatically
assigns unused addresses from the 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64 range for you.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#peer_ipv6_nexthop_address GoogleComputeRouterPeer#peer_ipv6_nexthop_address}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#project GoogleComputeRouterPeer#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.region"></a>

- *Type:* str

Region where the router and BgpPeer reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#region GoogleComputeRouterPeer#region}

---

##### `router_appliance_instance`<sup>Optional</sup> <a name="router_appliance_instance" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.routerApplianceInstance"></a>

- *Type:* str

The URI of the VM instance that is used as third-party router appliances such as Next Gen Firewalls, Virtual Routers, or Router Appliances.

The VM instance must be located in zones contained in the same region as
this Cloud Router. The VM instance is the peer side of the BGP session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#router_appliance_instance GoogleComputeRouterPeer#router_appliance_instance}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts">GoogleComputeRouterPeerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#timeouts GoogleComputeRouterPeer#timeouts}

---

##### `zero_advertised_route_priority`<sup>Optional</sup> <a name="zero_advertised_route_priority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.zeroAdvertisedRoutePriority"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Force the advertised_route_priority to be 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#zero_advertised_route_priority GoogleComputeRouterPeer#zero_advertised_route_priority}

---

##### `zero_custom_learned_route_priority`<sup>Optional</sup> <a name="zero_custom_learned_route_priority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.zeroCustomLearnedRoutePriority"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Force the custom_learned_route_priority to be 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#zero_custom_learned_route_priority GoogleComputeRouterPeer#zero_custom_learned_route_priority}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putAdvertisedIpRanges">put_advertised_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putBfd">put_bfd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putCustomLearnedIpRanges">put_custom_learned_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putMd5AuthenticationKey">put_md5_authentication_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetAdvertisedGroups">reset_advertised_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetAdvertisedIpRanges">reset_advertised_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetAdvertisedRoutePriority">reset_advertised_route_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetAdvertiseMode">reset_advertise_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetBfd">reset_bfd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetCustomLearnedIpRanges">reset_custom_learned_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetCustomLearnedRoutePriority">reset_custom_learned_route_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetEnable">reset_enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetEnableIpv4">reset_enable_ipv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetEnableIpv6">reset_enable_ipv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetExportPolicies">reset_export_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetImportPolicies">reset_import_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetIpv4NexthopAddress">reset_ipv4_nexthop_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetIpv6NexthopAddress">reset_ipv6_nexthop_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetMd5AuthenticationKey">reset_md5_authentication_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetPeerIpAddress">reset_peer_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetPeerIpv4NexthopAddress">reset_peer_ipv4_nexthop_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetPeerIpv6NexthopAddress">reset_peer_ipv6_nexthop_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetRouterApplianceInstance">reset_router_appliance_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetZeroAdvertisedRoutePriority">reset_zero_advertised_route_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetZeroCustomLearnedRoutePriority">reset_zero_custom_learned_route_priority</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_advertised_ip_ranges` <a name="put_advertised_ip_ranges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putAdvertisedIpRanges"></a>

```python
def put_advertised_ip_ranges(
  value: typing.Union[IResolvable, typing.List[GoogleComputeRouterPeerAdvertisedIpRanges]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putAdvertisedIpRanges.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges">GoogleComputeRouterPeerAdvertisedIpRanges</a>]]

---

##### `put_bfd` <a name="put_bfd" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putBfd"></a>

```python
def put_bfd(
  session_initialization_mode: str,
  min_receive_interval: typing.Union[int, float] = None,
  min_transmit_interval: typing.Union[int, float] = None,
  multiplier: typing.Union[int, float] = None
) -> None
```

###### `session_initialization_mode`<sup>Required</sup> <a name="session_initialization_mode" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putBfd.parameter.sessionInitializationMode"></a>

- *Type:* str

The BFD session initialization mode for this BGP peer.

If set to 'ACTIVE', the Cloud Router will initiate the BFD session
for this BGP peer. If set to 'PASSIVE', the Cloud Router will wait
for the peer router to initiate the BFD session for this BGP peer.
If set to 'DISABLED', BFD is disabled for this BGP peer. Possible values: ["ACTIVE", "DISABLED", "PASSIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#session_initialization_mode GoogleComputeRouterPeer#session_initialization_mode}

---

###### `min_receive_interval`<sup>Optional</sup> <a name="min_receive_interval" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putBfd.parameter.minReceiveInterval"></a>

- *Type:* typing.Union[int, float]

The minimum interval, in milliseconds, between BFD control packets received from the peer router.

The actual value is negotiated
between the two routers and is equal to the greater of this value
and the transmit interval of the other router. If set, this value
must be between 1000 and 30000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#min_receive_interval GoogleComputeRouterPeer#min_receive_interval}

---

###### `min_transmit_interval`<sup>Optional</sup> <a name="min_transmit_interval" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putBfd.parameter.minTransmitInterval"></a>

- *Type:* typing.Union[int, float]

The minimum interval, in milliseconds, between BFD control packets transmitted to the peer router.

The actual value is negotiated
between the two routers and is equal to the greater of this value
and the corresponding receive interval of the other router. If set,
this value must be between 1000 and 30000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#min_transmit_interval GoogleComputeRouterPeer#min_transmit_interval}

---

###### `multiplier`<sup>Optional</sup> <a name="multiplier" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putBfd.parameter.multiplier"></a>

- *Type:* typing.Union[int, float]

The number of consecutive BFD packets that must be missed before BFD declares that a peer is unavailable.

If set, the value must
be a value between 5 and 16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#multiplier GoogleComputeRouterPeer#multiplier}

---

##### `put_custom_learned_ip_ranges` <a name="put_custom_learned_ip_ranges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putCustomLearnedIpRanges"></a>

```python
def put_custom_learned_ip_ranges(
  value: typing.Union[IResolvable, typing.List[GoogleComputeRouterPeerCustomLearnedIpRanges]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putCustomLearnedIpRanges.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges">GoogleComputeRouterPeerCustomLearnedIpRanges</a>]]

---

##### `put_md5_authentication_key` <a name="put_md5_authentication_key" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putMd5AuthenticationKey"></a>

```python
def put_md5_authentication_key(
  key: str,
  name: str
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putMd5AuthenticationKey.parameter.key"></a>

- *Type:* str

Value of the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#key GoogleComputeRouterPeer#key}

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putMd5AuthenticationKey.parameter.name"></a>

- *Type:* str

[REQUIRED] Name used to identify the key.

Must be unique within a router. Must be referenced by exactly one bgpPeer. Must comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#name GoogleComputeRouterPeer#name}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#create GoogleComputeRouterPeer#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#delete GoogleComputeRouterPeer#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#update GoogleComputeRouterPeer#update}.

---

##### `reset_advertised_groups` <a name="reset_advertised_groups" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetAdvertisedGroups"></a>

```python
def reset_advertised_groups() -> None
```

##### `reset_advertised_ip_ranges` <a name="reset_advertised_ip_ranges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetAdvertisedIpRanges"></a>

```python
def reset_advertised_ip_ranges() -> None
```

##### `reset_advertised_route_priority` <a name="reset_advertised_route_priority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetAdvertisedRoutePriority"></a>

```python
def reset_advertised_route_priority() -> None
```

##### `reset_advertise_mode` <a name="reset_advertise_mode" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetAdvertiseMode"></a>

```python
def reset_advertise_mode() -> None
```

##### `reset_bfd` <a name="reset_bfd" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetBfd"></a>

```python
def reset_bfd() -> None
```

##### `reset_custom_learned_ip_ranges` <a name="reset_custom_learned_ip_ranges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetCustomLearnedIpRanges"></a>

```python
def reset_custom_learned_ip_ranges() -> None
```

##### `reset_custom_learned_route_priority` <a name="reset_custom_learned_route_priority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetCustomLearnedRoutePriority"></a>

```python
def reset_custom_learned_route_priority() -> None
```

##### `reset_enable` <a name="reset_enable" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetEnable"></a>

```python
def reset_enable() -> None
```

##### `reset_enable_ipv4` <a name="reset_enable_ipv4" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetEnableIpv4"></a>

```python
def reset_enable_ipv4() -> None
```

##### `reset_enable_ipv6` <a name="reset_enable_ipv6" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetEnableIpv6"></a>

```python
def reset_enable_ipv6() -> None
```

##### `reset_export_policies` <a name="reset_export_policies" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetExportPolicies"></a>

```python
def reset_export_policies() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_import_policies` <a name="reset_import_policies" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetImportPolicies"></a>

```python
def reset_import_policies() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_ipv4_nexthop_address` <a name="reset_ipv4_nexthop_address" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetIpv4NexthopAddress"></a>

```python
def reset_ipv4_nexthop_address() -> None
```

##### `reset_ipv6_nexthop_address` <a name="reset_ipv6_nexthop_address" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetIpv6NexthopAddress"></a>

```python
def reset_ipv6_nexthop_address() -> None
```

##### `reset_md5_authentication_key` <a name="reset_md5_authentication_key" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetMd5AuthenticationKey"></a>

```python
def reset_md5_authentication_key() -> None
```

##### `reset_peer_ip_address` <a name="reset_peer_ip_address" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetPeerIpAddress"></a>

```python
def reset_peer_ip_address() -> None
```

##### `reset_peer_ipv4_nexthop_address` <a name="reset_peer_ipv4_nexthop_address" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetPeerIpv4NexthopAddress"></a>

```python
def reset_peer_ipv4_nexthop_address() -> None
```

##### `reset_peer_ipv6_nexthop_address` <a name="reset_peer_ipv6_nexthop_address" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetPeerIpv6NexthopAddress"></a>

```python
def reset_peer_ipv6_nexthop_address() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_router_appliance_instance` <a name="reset_router_appliance_instance" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetRouterApplianceInstance"></a>

```python
def reset_router_appliance_instance() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_zero_advertised_route_priority` <a name="reset_zero_advertised_route_priority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetZeroAdvertisedRoutePriority"></a>

```python
def reset_zero_advertised_route_priority() -> None
```

##### `reset_zero_custom_learned_route_priority` <a name="reset_zero_custom_learned_route_priority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetZeroCustomLearnedRoutePriority"></a>

```python
def reset_zero_custom_learned_route_priority() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleComputeRouterPeer resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_peer

googleComputeRouterPeer.GoogleComputeRouterPeer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_peer

googleComputeRouterPeer.GoogleComputeRouterPeer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_peer

googleComputeRouterPeer.GoogleComputeRouterPeer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_peer

googleComputeRouterPeer.GoogleComputeRouterPeer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleComputeRouterPeer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeRouterPeer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeRouterPeer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRouterPeer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedIpRanges">advertised_ip_ranges</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList">GoogleComputeRouterPeerAdvertisedIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.bfd">bfd</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference">GoogleComputeRouterPeerBfdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.customLearnedIpRanges">custom_learned_ip_ranges</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList">GoogleComputeRouterPeerCustomLearnedIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.isAdvertisedRoutePrioritySet">is_advertised_route_priority_set</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.isCustomLearnedPrioritySet">is_custom_learned_priority_set</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.managementType">management_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.md5AuthenticationKey">md5_authentication_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference">GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference">GoogleComputeRouterPeerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedGroupsInput">advertised_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedIpRangesInput">advertised_ip_ranges_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges">GoogleComputeRouterPeerAdvertisedIpRanges</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedRoutePriorityInput">advertised_route_priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertiseModeInput">advertise_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.bfdInput">bfd_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd">GoogleComputeRouterPeerBfd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.customLearnedIpRangesInput">custom_learned_ip_ranges_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges">GoogleComputeRouterPeerCustomLearnedIpRanges</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.customLearnedRoutePriorityInput">custom_learned_route_priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableInput">enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableIpv4Input">enable_ipv4_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableIpv6Input">enable_ipv6_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.exportPoliciesInput">export_policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.importPoliciesInput">import_policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.interfaceInput">interface_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipv4NexthopAddressInput">ipv4_nexthop_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipv6NexthopAddressInput">ipv6_nexthop_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.md5AuthenticationKeyInput">md5_authentication_key_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey">GoogleComputeRouterPeerMd5AuthenticationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerAsnInput">peer_asn_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpAddressInput">peer_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpv4NexthopAddressInput">peer_ipv4_nexthop_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpv6NexthopAddressInput">peer_ipv6_nexthop_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.routerApplianceInstanceInput">router_appliance_instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.routerInput">router_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts">GoogleComputeRouterPeerTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.zeroAdvertisedRoutePriorityInput">zero_advertised_route_priority_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.zeroCustomLearnedRoutePriorityInput">zero_custom_learned_route_priority_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedGroups">advertised_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedRoutePriority">advertised_route_priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertiseMode">advertise_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.customLearnedRoutePriority">custom_learned_route_priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableIpv4">enable_ipv4</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableIpv6">enable_ipv6</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.exportPolicies">export_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.importPolicies">import_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.interface">interface</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipv4NexthopAddress">ipv4_nexthop_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipv6NexthopAddress">ipv6_nexthop_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerAsn">peer_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpAddress">peer_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpv4NexthopAddress">peer_ipv4_nexthop_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpv6NexthopAddress">peer_ipv6_nexthop_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.router">router</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.routerApplianceInstance">router_appliance_instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.zeroAdvertisedRoutePriority">zero_advertised_route_priority</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.zeroCustomLearnedRoutePriority">zero_custom_learned_route_priority</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `advertised_ip_ranges`<sup>Required</sup> <a name="advertised_ip_ranges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedIpRanges"></a>

```python
advertised_ip_ranges: GoogleComputeRouterPeerAdvertisedIpRangesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList">GoogleComputeRouterPeerAdvertisedIpRangesList</a>

---

##### `bfd`<sup>Required</sup> <a name="bfd" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.bfd"></a>

```python
bfd: GoogleComputeRouterPeerBfdOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference">GoogleComputeRouterPeerBfdOutputReference</a>

---

##### `custom_learned_ip_ranges`<sup>Required</sup> <a name="custom_learned_ip_ranges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.customLearnedIpRanges"></a>

```python
custom_learned_ip_ranges: GoogleComputeRouterPeerCustomLearnedIpRangesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList">GoogleComputeRouterPeerCustomLearnedIpRangesList</a>

---

##### `is_advertised_route_priority_set`<sup>Required</sup> <a name="is_advertised_route_priority_set" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.isAdvertisedRoutePrioritySet"></a>

```python
is_advertised_route_priority_set: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_custom_learned_priority_set`<sup>Required</sup> <a name="is_custom_learned_priority_set" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.isCustomLearnedPrioritySet"></a>

```python
is_custom_learned_priority_set: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `management_type`<sup>Required</sup> <a name="management_type" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.managementType"></a>

```python
management_type: str
```

- *Type:* str

---

##### `md5_authentication_key`<sup>Required</sup> <a name="md5_authentication_key" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.md5AuthenticationKey"></a>

```python
md5_authentication_key: GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference">GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.timeouts"></a>

```python
timeouts: GoogleComputeRouterPeerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference">GoogleComputeRouterPeerTimeoutsOutputReference</a>

---

##### `advertised_groups_input`<sup>Optional</sup> <a name="advertised_groups_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedGroupsInput"></a>

```python
advertised_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `advertised_ip_ranges_input`<sup>Optional</sup> <a name="advertised_ip_ranges_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedIpRangesInput"></a>

```python
advertised_ip_ranges_input: typing.Union[IResolvable, typing.List[GoogleComputeRouterPeerAdvertisedIpRanges]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges">GoogleComputeRouterPeerAdvertisedIpRanges</a>]]

---

##### `advertised_route_priority_input`<sup>Optional</sup> <a name="advertised_route_priority_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedRoutePriorityInput"></a>

```python
advertised_route_priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `advertise_mode_input`<sup>Optional</sup> <a name="advertise_mode_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertiseModeInput"></a>

```python
advertise_mode_input: str
```

- *Type:* str

---

##### `bfd_input`<sup>Optional</sup> <a name="bfd_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.bfdInput"></a>

```python
bfd_input: GoogleComputeRouterPeerBfd
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd">GoogleComputeRouterPeerBfd</a>

---

##### `custom_learned_ip_ranges_input`<sup>Optional</sup> <a name="custom_learned_ip_ranges_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.customLearnedIpRangesInput"></a>

```python
custom_learned_ip_ranges_input: typing.Union[IResolvable, typing.List[GoogleComputeRouterPeerCustomLearnedIpRanges]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges">GoogleComputeRouterPeerCustomLearnedIpRanges</a>]]

---

##### `custom_learned_route_priority_input`<sup>Optional</sup> <a name="custom_learned_route_priority_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.customLearnedRoutePriorityInput"></a>

```python
custom_learned_route_priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableInput"></a>

```python
enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_ipv4_input`<sup>Optional</sup> <a name="enable_ipv4_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableIpv4Input"></a>

```python
enable_ipv4_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_ipv6_input`<sup>Optional</sup> <a name="enable_ipv6_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableIpv6Input"></a>

```python
enable_ipv6_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `export_policies_input`<sup>Optional</sup> <a name="export_policies_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.exportPoliciesInput"></a>

```python
export_policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `import_policies_input`<sup>Optional</sup> <a name="import_policies_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.importPoliciesInput"></a>

```python
import_policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interface_input`<sup>Optional</sup> <a name="interface_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.interfaceInput"></a>

```python
interface_input: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `ipv4_nexthop_address_input`<sup>Optional</sup> <a name="ipv4_nexthop_address_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipv4NexthopAddressInput"></a>

```python
ipv4_nexthop_address_input: str
```

- *Type:* str

---

##### `ipv6_nexthop_address_input`<sup>Optional</sup> <a name="ipv6_nexthop_address_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipv6NexthopAddressInput"></a>

```python
ipv6_nexthop_address_input: str
```

- *Type:* str

---

##### `md5_authentication_key_input`<sup>Optional</sup> <a name="md5_authentication_key_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.md5AuthenticationKeyInput"></a>

```python
md5_authentication_key_input: GoogleComputeRouterPeerMd5AuthenticationKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey">GoogleComputeRouterPeerMd5AuthenticationKey</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `peer_asn_input`<sup>Optional</sup> <a name="peer_asn_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerAsnInput"></a>

```python
peer_asn_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peer_ip_address_input`<sup>Optional</sup> <a name="peer_ip_address_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpAddressInput"></a>

```python
peer_ip_address_input: str
```

- *Type:* str

---

##### `peer_ipv4_nexthop_address_input`<sup>Optional</sup> <a name="peer_ipv4_nexthop_address_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpv4NexthopAddressInput"></a>

```python
peer_ipv4_nexthop_address_input: str
```

- *Type:* str

---

##### `peer_ipv6_nexthop_address_input`<sup>Optional</sup> <a name="peer_ipv6_nexthop_address_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpv6NexthopAddressInput"></a>

```python
peer_ipv6_nexthop_address_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `router_appliance_instance_input`<sup>Optional</sup> <a name="router_appliance_instance_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.routerApplianceInstanceInput"></a>

```python
router_appliance_instance_input: str
```

- *Type:* str

---

##### `router_input`<sup>Optional</sup> <a name="router_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.routerInput"></a>

```python
router_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleComputeRouterPeerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts">GoogleComputeRouterPeerTimeouts</a>]

---

##### `zero_advertised_route_priority_input`<sup>Optional</sup> <a name="zero_advertised_route_priority_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.zeroAdvertisedRoutePriorityInput"></a>

```python
zero_advertised_route_priority_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `zero_custom_learned_route_priority_input`<sup>Optional</sup> <a name="zero_custom_learned_route_priority_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.zeroCustomLearnedRoutePriorityInput"></a>

```python
zero_custom_learned_route_priority_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `advertised_groups`<sup>Required</sup> <a name="advertised_groups" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedGroups"></a>

```python
advertised_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `advertised_route_priority`<sup>Required</sup> <a name="advertised_route_priority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedRoutePriority"></a>

```python
advertised_route_priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `advertise_mode`<sup>Required</sup> <a name="advertise_mode" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertiseMode"></a>

```python
advertise_mode: str
```

- *Type:* str

---

##### `custom_learned_route_priority`<sup>Required</sup> <a name="custom_learned_route_priority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.customLearnedRoutePriority"></a>

```python
custom_learned_route_priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_ipv4`<sup>Required</sup> <a name="enable_ipv4" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableIpv4"></a>

```python
enable_ipv4: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_ipv6`<sup>Required</sup> <a name="enable_ipv6" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableIpv6"></a>

```python
enable_ipv6: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `export_policies`<sup>Required</sup> <a name="export_policies" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.exportPolicies"></a>

```python
export_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `import_policies`<sup>Required</sup> <a name="import_policies" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.importPolicies"></a>

```python
import_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.interface"></a>

```python
interface: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `ipv4_nexthop_address`<sup>Required</sup> <a name="ipv4_nexthop_address" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipv4NexthopAddress"></a>

```python
ipv4_nexthop_address: str
```

- *Type:* str

---

##### `ipv6_nexthop_address`<sup>Required</sup> <a name="ipv6_nexthop_address" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipv6NexthopAddress"></a>

```python
ipv6_nexthop_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `peer_asn`<sup>Required</sup> <a name="peer_asn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerAsn"></a>

```python
peer_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peer_ip_address`<sup>Required</sup> <a name="peer_ip_address" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpAddress"></a>

```python
peer_ip_address: str
```

- *Type:* str

---

##### `peer_ipv4_nexthop_address`<sup>Required</sup> <a name="peer_ipv4_nexthop_address" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpv4NexthopAddress"></a>

```python
peer_ipv4_nexthop_address: str
```

- *Type:* str

---

##### `peer_ipv6_nexthop_address`<sup>Required</sup> <a name="peer_ipv6_nexthop_address" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpv6NexthopAddress"></a>

```python
peer_ipv6_nexthop_address: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.router"></a>

```python
router: str
```

- *Type:* str

---

##### `router_appliance_instance`<sup>Required</sup> <a name="router_appliance_instance" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.routerApplianceInstance"></a>

```python
router_appliance_instance: str
```

- *Type:* str

---

##### `zero_advertised_route_priority`<sup>Required</sup> <a name="zero_advertised_route_priority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.zeroAdvertisedRoutePriority"></a>

```python
zero_advertised_route_priority: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `zero_custom_learned_route_priority`<sup>Required</sup> <a name="zero_custom_learned_route_priority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.zeroCustomLearnedRoutePriority"></a>

```python
zero_custom_learned_route_priority: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRouterPeerAdvertisedIpRanges <a name="GoogleComputeRouterPeerAdvertisedIpRanges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_peer

googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges(
  range: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges.property.range">range</a></code> | <code>str</code> | The IP range to advertise. The value must be a CIDR-formatted string. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges.property.description">description</a></code> | <code>str</code> | User-specified description for the IP range. |

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges.property.range"></a>

```python
range: str
```

- *Type:* str

The IP range to advertise. The value must be a CIDR-formatted string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#range GoogleComputeRouterPeer#range}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges.property.description"></a>

```python
description: str
```

- *Type:* str

User-specified description for the IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#description GoogleComputeRouterPeer#description}

---

### GoogleComputeRouterPeerBfd <a name="GoogleComputeRouterPeerBfd" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_peer

googleComputeRouterPeer.GoogleComputeRouterPeerBfd(
  session_initialization_mode: str,
  min_receive_interval: typing.Union[int, float] = None,
  min_transmit_interval: typing.Union[int, float] = None,
  multiplier: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.property.sessionInitializationMode">session_initialization_mode</a></code> | <code>str</code> | The BFD session initialization mode for this BGP peer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.property.minReceiveInterval">min_receive_interval</a></code> | <code>typing.Union[int, float]</code> | The minimum interval, in milliseconds, between BFD control packets received from the peer router. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.property.minTransmitInterval">min_transmit_interval</a></code> | <code>typing.Union[int, float]</code> | The minimum interval, in milliseconds, between BFD control packets transmitted to the peer router. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.property.multiplier">multiplier</a></code> | <code>typing.Union[int, float]</code> | The number of consecutive BFD packets that must be missed before BFD declares that a peer is unavailable. |

---

##### `session_initialization_mode`<sup>Required</sup> <a name="session_initialization_mode" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.property.sessionInitializationMode"></a>

```python
session_initialization_mode: str
```

- *Type:* str

The BFD session initialization mode for this BGP peer.

If set to 'ACTIVE', the Cloud Router will initiate the BFD session
for this BGP peer. If set to 'PASSIVE', the Cloud Router will wait
for the peer router to initiate the BFD session for this BGP peer.
If set to 'DISABLED', BFD is disabled for this BGP peer. Possible values: ["ACTIVE", "DISABLED", "PASSIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#session_initialization_mode GoogleComputeRouterPeer#session_initialization_mode}

---

##### `min_receive_interval`<sup>Optional</sup> <a name="min_receive_interval" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.property.minReceiveInterval"></a>

```python
min_receive_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum interval, in milliseconds, between BFD control packets received from the peer router.

The actual value is negotiated
between the two routers and is equal to the greater of this value
and the transmit interval of the other router. If set, this value
must be between 1000 and 30000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#min_receive_interval GoogleComputeRouterPeer#min_receive_interval}

---

##### `min_transmit_interval`<sup>Optional</sup> <a name="min_transmit_interval" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.property.minTransmitInterval"></a>

```python
min_transmit_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum interval, in milliseconds, between BFD control packets transmitted to the peer router.

The actual value is negotiated
between the two routers and is equal to the greater of this value
and the corresponding receive interval of the other router. If set,
this value must be between 1000 and 30000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#min_transmit_interval GoogleComputeRouterPeer#min_transmit_interval}

---

##### `multiplier`<sup>Optional</sup> <a name="multiplier" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.property.multiplier"></a>

```python
multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of consecutive BFD packets that must be missed before BFD declares that a peer is unavailable.

If set, the value must
be a value between 5 and 16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#multiplier GoogleComputeRouterPeer#multiplier}

---

### GoogleComputeRouterPeerConfig <a name="GoogleComputeRouterPeerConfig" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_peer

googleComputeRouterPeer.GoogleComputeRouterPeerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  interface: str,
  name: str,
  peer_asn: typing.Union[int, float],
  router: str,
  advertised_groups: typing.List[str] = None,
  advertised_ip_ranges: typing.Union[IResolvable, typing.List[GoogleComputeRouterPeerAdvertisedIpRanges]] = None,
  advertised_route_priority: typing.Union[int, float] = None,
  advertise_mode: str = None,
  bfd: GoogleComputeRouterPeerBfd = None,
  custom_learned_ip_ranges: typing.Union[IResolvable, typing.List[GoogleComputeRouterPeerCustomLearnedIpRanges]] = None,
  custom_learned_route_priority: typing.Union[int, float] = None,
  enable: typing.Union[bool, IResolvable] = None,
  enable_ipv4: typing.Union[bool, IResolvable] = None,
  enable_ipv6: typing.Union[bool, IResolvable] = None,
  export_policies: typing.List[str] = None,
  id: str = None,
  import_policies: typing.List[str] = None,
  ip_address: str = None,
  ipv4_nexthop_address: str = None,
  ipv6_nexthop_address: str = None,
  md5_authentication_key: GoogleComputeRouterPeerMd5AuthenticationKey = None,
  peer_ip_address: str = None,
  peer_ipv4_nexthop_address: str = None,
  peer_ipv6_nexthop_address: str = None,
  project: str = None,
  region: str = None,
  router_appliance_instance: str = None,
  timeouts: GoogleComputeRouterPeerTimeouts = None,
  zero_advertised_route_priority: typing.Union[bool, IResolvable] = None,
  zero_custom_learned_route_priority: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.interface">interface</a></code> | <code>str</code> | Name of the interface the BGP peer is associated with. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.name">name</a></code> | <code>str</code> | Name of this BGP peer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.peerAsn">peer_asn</a></code> | <code>typing.Union[int, float]</code> | Peer BGP Autonomous System Number (ASN). Each BGP interface may use a different value. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.router">router</a></code> | <code>str</code> | The name of the Cloud Router in which this BgpPeer will be configured. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.advertisedGroups">advertised_groups</a></code> | <code>typing.List[str]</code> | User-specified list of prefix groups to advertise in custom mode, which currently supports the following option:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.advertisedIpRanges">advertised_ip_ranges</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges">GoogleComputeRouterPeerAdvertisedIpRanges</a>]]</code> | advertised_ip_ranges block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.advertisedRoutePriority">advertised_route_priority</a></code> | <code>typing.Union[int, float]</code> | The priority of routes advertised to this BGP peer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.advertiseMode">advertise_mode</a></code> | <code>str</code> | User-specified flag to indicate which mode to use for advertisement. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.bfd">bfd</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd">GoogleComputeRouterPeerBfd</a></code> | bfd block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.customLearnedIpRanges">custom_learned_ip_ranges</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges">GoogleComputeRouterPeerCustomLearnedIpRanges</a>]]</code> | custom_learned_ip_ranges block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.customLearnedRoutePriority">custom_learned_route_priority</a></code> | <code>typing.Union[int, float]</code> | The user-defined custom learned route priority for a BGP session. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The status of the BGP peer connection. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.enableIpv4">enable_ipv4</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable IPv4 traffic over BGP Peer. It is enabled by default if the peerIpAddress is version 4. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.enableIpv6">enable_ipv6</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable IPv6 traffic over BGP Peer. If not specified, it is disabled by default. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.exportPolicies">export_policies</a></code> | <code>typing.List[str]</code> | routers.list of export policies applied to this peer, in the order they must be evaluated.  The name must correspond to an existing policy that has ROUTE_POLICY_TYPE_EXPORT type. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#id GoogleComputeRouterPeer#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.importPolicies">import_policies</a></code> | <code>typing.List[str]</code> | routers.list of import policies applied to this peer, in the order they must be evaluated.  The name must correspond to an existing policy that has ROUTE_POLICY_TYPE_IMPORT type. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.ipAddress">ip_address</a></code> | <code>str</code> | IP address of the interface inside Google Cloud Platform. Only IPv4 is supported. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.ipv4NexthopAddress">ipv4_nexthop_address</a></code> | <code>str</code> | IPv4 address of the interface inside Google Cloud Platform. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.ipv6NexthopAddress">ipv6_nexthop_address</a></code> | <code>str</code> | IPv6 address of the interface inside Google Cloud Platform. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.md5AuthenticationKey">md5_authentication_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey">GoogleComputeRouterPeerMd5AuthenticationKey</a></code> | md5_authentication_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.peerIpAddress">peer_ip_address</a></code> | <code>str</code> | IP address of the BGP interface outside Google Cloud Platform. Only IPv4 is supported. Required if 'ip_address' is set. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.peerIpv4NexthopAddress">peer_ipv4_nexthop_address</a></code> | <code>str</code> | IPv4 address of the BGP interface outside Google Cloud Platform. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.peerIpv6NexthopAddress">peer_ipv6_nexthop_address</a></code> | <code>str</code> | IPv6 address of the BGP interface outside Google Cloud Platform. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#project GoogleComputeRouterPeer#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.region">region</a></code> | <code>str</code> | Region where the router and BgpPeer reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.routerApplianceInstance">router_appliance_instance</a></code> | <code>str</code> | The URI of the VM instance that is used as third-party router appliances such as Next Gen Firewalls, Virtual Routers, or Router Appliances. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts">GoogleComputeRouterPeerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.zeroAdvertisedRoutePriority">zero_advertised_route_priority</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Force the advertised_route_priority to be 0. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.zeroCustomLearnedRoutePriority">zero_custom_learned_route_priority</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Force the custom_learned_route_priority to be 0. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.interface"></a>

```python
interface: str
```

- *Type:* str

Name of the interface the BGP peer is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#interface GoogleComputeRouterPeer#interface}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of this BGP peer.

The name must be 1-63 characters long,
and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#name GoogleComputeRouterPeer#name}

---

##### `peer_asn`<sup>Required</sup> <a name="peer_asn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.peerAsn"></a>

```python
peer_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Peer BGP Autonomous System Number (ASN). Each BGP interface may use a different value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#peer_asn GoogleComputeRouterPeer#peer_asn}

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.router"></a>

```python
router: str
```

- *Type:* str

The name of the Cloud Router in which this BgpPeer will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#router GoogleComputeRouterPeer#router}

---

##### `advertised_groups`<sup>Optional</sup> <a name="advertised_groups" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.advertisedGroups"></a>

```python
advertised_groups: typing.List[str]
```

- *Type:* typing.List[str]

User-specified list of prefix groups to advertise in custom mode, which currently supports the following option:.

* 'ALL_SUBNETS': Advertises all of the router's own VPC subnets.
  This excludes any routes learned for subnets that use VPC Network
  Peering.

Note that this field can only be populated if advertiseMode is 'CUSTOM'
and overrides the list defined for the router (in the "bgp" message).
These groups are advertised in addition to any specified prefixes.
Leave this field blank to advertise no custom groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#advertised_groups GoogleComputeRouterPeer#advertised_groups}

---

##### `advertised_ip_ranges`<sup>Optional</sup> <a name="advertised_ip_ranges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.advertisedIpRanges"></a>

```python
advertised_ip_ranges: typing.Union[IResolvable, typing.List[GoogleComputeRouterPeerAdvertisedIpRanges]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges">GoogleComputeRouterPeerAdvertisedIpRanges</a>]]

advertised_ip_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#advertised_ip_ranges GoogleComputeRouterPeer#advertised_ip_ranges}

---

##### `advertised_route_priority`<sup>Optional</sup> <a name="advertised_route_priority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.advertisedRoutePriority"></a>

```python
advertised_route_priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The priority of routes advertised to this BGP peer.

Where there is more than one matching route of maximum
length, the routes with the lowest priority value win.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#advertised_route_priority GoogleComputeRouterPeer#advertised_route_priority}

---

##### `advertise_mode`<sup>Optional</sup> <a name="advertise_mode" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.advertiseMode"></a>

```python
advertise_mode: str
```

- *Type:* str

User-specified flag to indicate which mode to use for advertisement.

Valid values of this enum field are: 'DEFAULT', 'CUSTOM' Default value: "DEFAULT" Possible values: ["DEFAULT", "CUSTOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#advertise_mode GoogleComputeRouterPeer#advertise_mode}

---

##### `bfd`<sup>Optional</sup> <a name="bfd" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.bfd"></a>

```python
bfd: GoogleComputeRouterPeerBfd
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd">GoogleComputeRouterPeerBfd</a>

bfd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#bfd GoogleComputeRouterPeer#bfd}

---

##### `custom_learned_ip_ranges`<sup>Optional</sup> <a name="custom_learned_ip_ranges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.customLearnedIpRanges"></a>

```python
custom_learned_ip_ranges: typing.Union[IResolvable, typing.List[GoogleComputeRouterPeerCustomLearnedIpRanges]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges">GoogleComputeRouterPeerCustomLearnedIpRanges</a>]]

custom_learned_ip_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#custom_learned_ip_ranges GoogleComputeRouterPeer#custom_learned_ip_ranges}

---

##### `custom_learned_route_priority`<sup>Optional</sup> <a name="custom_learned_route_priority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.customLearnedRoutePriority"></a>

```python
custom_learned_route_priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The user-defined custom learned route priority for a BGP session.

This value is applied to all custom learned route ranges for the session. You can choose a value
from 0 to 65335. If you don't provide a value, Google Cloud assigns a priority of 100 to the ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#custom_learned_route_priority GoogleComputeRouterPeer#custom_learned_route_priority}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The status of the BGP peer connection.

If set to false, any active session
with the peer is terminated and all associated routing information is removed.
If set to true, the peer connection can be established with routing information.
The default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#enable GoogleComputeRouterPeer#enable}

---

##### `enable_ipv4`<sup>Optional</sup> <a name="enable_ipv4" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.enableIpv4"></a>

```python
enable_ipv4: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable IPv4 traffic over BGP Peer. It is enabled by default if the peerIpAddress is version 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#enable_ipv4 GoogleComputeRouterPeer#enable_ipv4}

---

##### `enable_ipv6`<sup>Optional</sup> <a name="enable_ipv6" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.enableIpv6"></a>

```python
enable_ipv6: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable IPv6 traffic over BGP Peer. If not specified, it is disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#enable_ipv6 GoogleComputeRouterPeer#enable_ipv6}

---

##### `export_policies`<sup>Optional</sup> <a name="export_policies" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.exportPolicies"></a>

```python
export_policies: typing.List[str]
```

- *Type:* typing.List[str]

routers.list of export policies applied to this peer, in the order they must be evaluated.  The name must correspond to an existing policy that has ROUTE_POLICY_TYPE_EXPORT type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#export_policies GoogleComputeRouterPeer#export_policies}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#id GoogleComputeRouterPeer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `import_policies`<sup>Optional</sup> <a name="import_policies" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.importPolicies"></a>

```python
import_policies: typing.List[str]
```

- *Type:* typing.List[str]

routers.list of import policies applied to this peer, in the order they must be evaluated.  The name must correspond to an existing policy that has ROUTE_POLICY_TYPE_IMPORT type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#import_policies GoogleComputeRouterPeer#import_policies}

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

IP address of the interface inside Google Cloud Platform. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#ip_address GoogleComputeRouterPeer#ip_address}

---

##### `ipv4_nexthop_address`<sup>Optional</sup> <a name="ipv4_nexthop_address" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.ipv4NexthopAddress"></a>

```python
ipv4_nexthop_address: str
```

- *Type:* str

IPv4 address of the interface inside Google Cloud Platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#ipv4_nexthop_address GoogleComputeRouterPeer#ipv4_nexthop_address}

---

##### `ipv6_nexthop_address`<sup>Optional</sup> <a name="ipv6_nexthop_address" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.ipv6NexthopAddress"></a>

```python
ipv6_nexthop_address: str
```

- *Type:* str

IPv6 address of the interface inside Google Cloud Platform.

The address must be in the range 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64.
If you do not specify the next hop addresses, Google Cloud automatically
assigns unused addresses from the 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64 range for you.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#ipv6_nexthop_address GoogleComputeRouterPeer#ipv6_nexthop_address}

---

##### `md5_authentication_key`<sup>Optional</sup> <a name="md5_authentication_key" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.md5AuthenticationKey"></a>

```python
md5_authentication_key: GoogleComputeRouterPeerMd5AuthenticationKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey">GoogleComputeRouterPeerMd5AuthenticationKey</a>

md5_authentication_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#md5_authentication_key GoogleComputeRouterPeer#md5_authentication_key}

---

##### `peer_ip_address`<sup>Optional</sup> <a name="peer_ip_address" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.peerIpAddress"></a>

```python
peer_ip_address: str
```

- *Type:* str

IP address of the BGP interface outside Google Cloud Platform. Only IPv4 is supported. Required if 'ip_address' is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#peer_ip_address GoogleComputeRouterPeer#peer_ip_address}

---

##### `peer_ipv4_nexthop_address`<sup>Optional</sup> <a name="peer_ipv4_nexthop_address" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.peerIpv4NexthopAddress"></a>

```python
peer_ipv4_nexthop_address: str
```

- *Type:* str

IPv4 address of the BGP interface outside Google Cloud Platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#peer_ipv4_nexthop_address GoogleComputeRouterPeer#peer_ipv4_nexthop_address}

---

##### `peer_ipv6_nexthop_address`<sup>Optional</sup> <a name="peer_ipv6_nexthop_address" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.peerIpv6NexthopAddress"></a>

```python
peer_ipv6_nexthop_address: str
```

- *Type:* str

IPv6 address of the BGP interface outside Google Cloud Platform.

The address must be in the range 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64.
If you do not specify the next hop addresses, Google Cloud automatically
assigns unused addresses from the 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64 range for you.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#peer_ipv6_nexthop_address GoogleComputeRouterPeer#peer_ipv6_nexthop_address}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#project GoogleComputeRouterPeer#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where the router and BgpPeer reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#region GoogleComputeRouterPeer#region}

---

##### `router_appliance_instance`<sup>Optional</sup> <a name="router_appliance_instance" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.routerApplianceInstance"></a>

```python
router_appliance_instance: str
```

- *Type:* str

The URI of the VM instance that is used as third-party router appliances such as Next Gen Firewalls, Virtual Routers, or Router Appliances.

The VM instance must be located in zones contained in the same region as
this Cloud Router. The VM instance is the peer side of the BGP session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#router_appliance_instance GoogleComputeRouterPeer#router_appliance_instance}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeRouterPeerTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts">GoogleComputeRouterPeerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#timeouts GoogleComputeRouterPeer#timeouts}

---

##### `zero_advertised_route_priority`<sup>Optional</sup> <a name="zero_advertised_route_priority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.zeroAdvertisedRoutePriority"></a>

```python
zero_advertised_route_priority: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Force the advertised_route_priority to be 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#zero_advertised_route_priority GoogleComputeRouterPeer#zero_advertised_route_priority}

---

##### `zero_custom_learned_route_priority`<sup>Optional</sup> <a name="zero_custom_learned_route_priority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.zeroCustomLearnedRoutePriority"></a>

```python
zero_custom_learned_route_priority: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Force the custom_learned_route_priority to be 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#zero_custom_learned_route_priority GoogleComputeRouterPeer#zero_custom_learned_route_priority}

---

### GoogleComputeRouterPeerCustomLearnedIpRanges <a name="GoogleComputeRouterPeerCustomLearnedIpRanges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_peer

googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges(
  range: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges.property.range">range</a></code> | <code>str</code> | The IP range to learn. The value must be a CIDR-formatted string. |

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges.property.range"></a>

```python
range: str
```

- *Type:* str

The IP range to learn. The value must be a CIDR-formatted string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#range GoogleComputeRouterPeer#range}

---

### GoogleComputeRouterPeerMd5AuthenticationKey <a name="GoogleComputeRouterPeerMd5AuthenticationKey" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_peer

googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey(
  key: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey.property.key">key</a></code> | <code>str</code> | Value of the key. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey.property.name">name</a></code> | <code>str</code> | [REQUIRED] Name used to identify the key. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey.property.key"></a>

```python
key: str
```

- *Type:* str

Value of the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#key GoogleComputeRouterPeer#key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey.property.name"></a>

```python
name: str
```

- *Type:* str

[REQUIRED] Name used to identify the key.

Must be unique within a router. Must be referenced by exactly one bgpPeer. Must comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#name GoogleComputeRouterPeer#name}

---

### GoogleComputeRouterPeerTimeouts <a name="GoogleComputeRouterPeerTimeouts" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_peer

googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#create GoogleComputeRouterPeer#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#delete GoogleComputeRouterPeer#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#update GoogleComputeRouterPeer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#create GoogleComputeRouterPeer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#delete GoogleComputeRouterPeer#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_compute_router_peer#update GoogleComputeRouterPeer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRouterPeerAdvertisedIpRangesList <a name="GoogleComputeRouterPeerAdvertisedIpRangesList" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_peer

googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeRouterPeerAdvertisedIpRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges">GoogleComputeRouterPeerAdvertisedIpRanges</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeRouterPeerAdvertisedIpRanges]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges">GoogleComputeRouterPeerAdvertisedIpRanges</a>]]

---


### GoogleComputeRouterPeerAdvertisedIpRangesOutputReference <a name="GoogleComputeRouterPeerAdvertisedIpRangesOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_peer

googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.rangeInput">range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.range">range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges">GoogleComputeRouterPeerAdvertisedIpRanges</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `range_input`<sup>Optional</sup> <a name="range_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.rangeInput"></a>

```python
range_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.range"></a>

```python
range: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeRouterPeerAdvertisedIpRanges]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges">GoogleComputeRouterPeerAdvertisedIpRanges</a>]

---


### GoogleComputeRouterPeerBfdOutputReference <a name="GoogleComputeRouterPeerBfdOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_peer

googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resetMinReceiveInterval">reset_min_receive_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resetMinTransmitInterval">reset_min_transmit_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resetMultiplier">reset_multiplier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_min_receive_interval` <a name="reset_min_receive_interval" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resetMinReceiveInterval"></a>

```python
def reset_min_receive_interval() -> None
```

##### `reset_min_transmit_interval` <a name="reset_min_transmit_interval" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resetMinTransmitInterval"></a>

```python
def reset_min_transmit_interval() -> None
```

##### `reset_multiplier` <a name="reset_multiplier" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resetMultiplier"></a>

```python
def reset_multiplier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.minReceiveIntervalInput">min_receive_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.minTransmitIntervalInput">min_transmit_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.multiplierInput">multiplier_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.sessionInitializationModeInput">session_initialization_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.minReceiveInterval">min_receive_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.minTransmitInterval">min_transmit_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.multiplier">multiplier</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.sessionInitializationMode">session_initialization_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd">GoogleComputeRouterPeerBfd</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `min_receive_interval_input`<sup>Optional</sup> <a name="min_receive_interval_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.minReceiveIntervalInput"></a>

```python
min_receive_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_transmit_interval_input`<sup>Optional</sup> <a name="min_transmit_interval_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.minTransmitIntervalInput"></a>

```python
min_transmit_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `multiplier_input`<sup>Optional</sup> <a name="multiplier_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.multiplierInput"></a>

```python
multiplier_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_initialization_mode_input`<sup>Optional</sup> <a name="session_initialization_mode_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.sessionInitializationModeInput"></a>

```python
session_initialization_mode_input: str
```

- *Type:* str

---

##### `min_receive_interval`<sup>Required</sup> <a name="min_receive_interval" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.minReceiveInterval"></a>

```python
min_receive_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_transmit_interval`<sup>Required</sup> <a name="min_transmit_interval" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.minTransmitInterval"></a>

```python
min_transmit_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `multiplier`<sup>Required</sup> <a name="multiplier" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.multiplier"></a>

```python
multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_initialization_mode`<sup>Required</sup> <a name="session_initialization_mode" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.sessionInitializationMode"></a>

```python
session_initialization_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeRouterPeerBfd
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd">GoogleComputeRouterPeerBfd</a>

---


### GoogleComputeRouterPeerCustomLearnedIpRangesList <a name="GoogleComputeRouterPeerCustomLearnedIpRangesList" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_peer

googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges">GoogleComputeRouterPeerCustomLearnedIpRanges</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeRouterPeerCustomLearnedIpRanges]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges">GoogleComputeRouterPeerCustomLearnedIpRanges</a>]]

---


### GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference <a name="GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_peer

googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.property.rangeInput">range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.property.range">range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges">GoogleComputeRouterPeerCustomLearnedIpRanges</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `range_input`<sup>Optional</sup> <a name="range_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.property.rangeInput"></a>

```python
range_input: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.property.range"></a>

```python
range: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRangesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeRouterPeerCustomLearnedIpRanges]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerCustomLearnedIpRanges">GoogleComputeRouterPeerCustomLearnedIpRanges</a>]

---


### GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference <a name="GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_peer

googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey">GoogleComputeRouterPeerMd5AuthenticationKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKeyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeRouterPeerMd5AuthenticationKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerMd5AuthenticationKey">GoogleComputeRouterPeerMd5AuthenticationKey</a>

---


### GoogleComputeRouterPeerTimeoutsOutputReference <a name="GoogleComputeRouterPeerTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_peer

googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts">GoogleComputeRouterPeerTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeRouterPeerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts">GoogleComputeRouterPeerTimeouts</a>]

---



