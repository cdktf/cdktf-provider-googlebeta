# `google_compute_router_peer`

Refer to the Terraform Registory for docs: [`google_compute_router_peer`](https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer).

# `googleComputeRouterPeer` Submodule <a name="`googleComputeRouterPeer` Submodule" id="@cdktf/provider-google-beta.googleComputeRouterPeer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRouterPeer <a name="GoogleComputeRouterPeer" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer google_compute_router_peer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_router_peer.GoogleComputeRouterPeer;

GoogleComputeRouterPeer.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .interface(java.lang.String)
    .name(java.lang.String)
    .peerAsn(java.lang.Number)
    .router(java.lang.String)
//  .advertisedGroups(java.util.List<java.lang.String>)
//  .advertisedIpRanges(IResolvable)
//  .advertisedIpRanges(java.util.List<GoogleComputeRouterPeerAdvertisedIpRanges>)
//  .advertisedRoutePriority(java.lang.Number)
//  .advertiseMode(java.lang.String)
//  .bfd(GoogleComputeRouterPeerBfd)
//  .enable(java.lang.Boolean)
//  .enable(IResolvable)
//  .enableIpv6(java.lang.Boolean)
//  .enableIpv6(IResolvable)
//  .id(java.lang.String)
//  .ipAddress(java.lang.String)
//  .ipv6NexthopAddress(java.lang.String)
//  .peerIpAddress(java.lang.String)
//  .peerIpv6NexthopAddress(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .routerApplianceInstance(java.lang.String)
//  .timeouts(GoogleComputeRouterPeerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.interface">interface</a></code> | <code>java.lang.String</code> | Name of the interface the BGP peer is associated with. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of this BGP peer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.peerAsn">peerAsn</a></code> | <code>java.lang.Number</code> | Peer BGP Autonomous System Number (ASN). Each BGP interface may use a different value. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.router">router</a></code> | <code>java.lang.String</code> | The name of the Cloud Router in which this BgpPeer will be configured. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.advertisedGroups">advertisedGroups</a></code> | <code>java.util.List<java.lang.String></code> | User-specified list of prefix groups to advertise in custom mode, which can take one of the following options:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.advertisedIpRanges">advertisedIpRanges</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges">GoogleComputeRouterPeerAdvertisedIpRanges</a>></code> | advertised_ip_ranges block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.advertisedRoutePriority">advertisedRoutePriority</a></code> | <code>java.lang.Number</code> | The priority of routes advertised to this BGP peer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.advertiseMode">advertiseMode</a></code> | <code>java.lang.String</code> | User-specified flag to indicate which mode to use for advertisement. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.bfd">bfd</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd">GoogleComputeRouterPeerBfd</a></code> | bfd block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The status of the BGP peer connection. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.enableIpv6">enableIpv6</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable IPv6 traffic over BGP Peer. If not specified, it is disabled by default. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#id GoogleComputeRouterPeer#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | IP address of the interface inside Google Cloud Platform. Only IPv4 is supported. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.ipv6NexthopAddress">ipv6NexthopAddress</a></code> | <code>java.lang.String</code> | IPv6 address of the interface inside Google Cloud Platform. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.peerIpAddress">peerIpAddress</a></code> | <code>java.lang.String</code> | IP address of the BGP interface outside Google Cloud Platform. Only IPv4 is supported. Required if 'ip_address' is set. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.peerIpv6NexthopAddress">peerIpv6NexthopAddress</a></code> | <code>java.lang.String</code> | IPv6 address of the BGP interface outside Google Cloud Platform. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#project GoogleComputeRouterPeer#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where the router and BgpPeer reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.routerApplianceInstance">routerApplianceInstance</a></code> | <code>java.lang.String</code> | The URI of the VM instance that is used as third-party router appliances such as Next Gen Firewalls, Virtual Routers, or Router Appliances. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts">GoogleComputeRouterPeerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.interface"></a>

- *Type:* java.lang.String

Name of the interface the BGP peer is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#interface GoogleComputeRouterPeer#interface}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of this BGP peer.

The name must be 1-63 characters long,
and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#name GoogleComputeRouterPeer#name}

---

##### `peerAsn`<sup>Required</sup> <a name="peerAsn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.peerAsn"></a>

- *Type:* java.lang.Number

Peer BGP Autonomous System Number (ASN). Each BGP interface may use a different value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#peer_asn GoogleComputeRouterPeer#peer_asn}

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.router"></a>

- *Type:* java.lang.String

The name of the Cloud Router in which this BgpPeer will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#router GoogleComputeRouterPeer#router}

---

##### `advertisedGroups`<sup>Optional</sup> <a name="advertisedGroups" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.advertisedGroups"></a>

- *Type:* java.util.List<java.lang.String>

User-specified list of prefix groups to advertise in custom mode, which can take one of the following options:.

'ALL_SUBNETS': Advertises all available subnets, including peer VPC subnets.
'ALL_VPC_SUBNETS': Advertises the router's own VPC subnets.
'ALL_PEER_VPC_SUBNETS': Advertises peer subnets of the router's VPC network.

Note that this field can only be populated if advertiseMode is 'CUSTOM'
and overrides the list defined for the router (in the "bgp" message).
These groups are advertised in addition to any specified prefixes.
Leave this field blank to advertise no custom groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#advertised_groups GoogleComputeRouterPeer#advertised_groups}

---

##### `advertisedIpRanges`<sup>Optional</sup> <a name="advertisedIpRanges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.advertisedIpRanges"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges">GoogleComputeRouterPeerAdvertisedIpRanges</a>>

advertised_ip_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#advertised_ip_ranges GoogleComputeRouterPeer#advertised_ip_ranges}

---

##### `advertisedRoutePriority`<sup>Optional</sup> <a name="advertisedRoutePriority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.advertisedRoutePriority"></a>

- *Type:* java.lang.Number

The priority of routes advertised to this BGP peer.

Where there is more than one matching route of maximum
length, the routes with the lowest priority value win.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#advertised_route_priority GoogleComputeRouterPeer#advertised_route_priority}

---

##### `advertiseMode`<sup>Optional</sup> <a name="advertiseMode" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.advertiseMode"></a>

- *Type:* java.lang.String

User-specified flag to indicate which mode to use for advertisement.

Valid values of this enum field are: 'DEFAULT', 'CUSTOM' Default value: "DEFAULT" Possible values: ["DEFAULT", "CUSTOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#advertise_mode GoogleComputeRouterPeer#advertise_mode}

---

##### `bfd`<sup>Optional</sup> <a name="bfd" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.bfd"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd">GoogleComputeRouterPeerBfd</a>

bfd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#bfd GoogleComputeRouterPeer#bfd}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.enable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The status of the BGP peer connection.

If set to false, any active session
with the peer is terminated and all associated routing information is removed.
If set to true, the peer connection can be established with routing information.
The default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#enable GoogleComputeRouterPeer#enable}

---

##### `enableIpv6`<sup>Optional</sup> <a name="enableIpv6" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.enableIpv6"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable IPv6 traffic over BGP Peer. If not specified, it is disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#enable_ipv6 GoogleComputeRouterPeer#enable_ipv6}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#id GoogleComputeRouterPeer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.ipAddress"></a>

- *Type:* java.lang.String

IP address of the interface inside Google Cloud Platform. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#ip_address GoogleComputeRouterPeer#ip_address}

---

##### `ipv6NexthopAddress`<sup>Optional</sup> <a name="ipv6NexthopAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.ipv6NexthopAddress"></a>

- *Type:* java.lang.String

IPv6 address of the interface inside Google Cloud Platform.

The address must be in the range 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64.
If you do not specify the next hop addresses, Google Cloud automatically
assigns unused addresses from the 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64 range for you.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#ipv6_nexthop_address GoogleComputeRouterPeer#ipv6_nexthop_address}

---

##### `peerIpAddress`<sup>Optional</sup> <a name="peerIpAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.peerIpAddress"></a>

- *Type:* java.lang.String

IP address of the BGP interface outside Google Cloud Platform. Only IPv4 is supported. Required if 'ip_address' is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#peer_ip_address GoogleComputeRouterPeer#peer_ip_address}

---

##### `peerIpv6NexthopAddress`<sup>Optional</sup> <a name="peerIpv6NexthopAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.peerIpv6NexthopAddress"></a>

- *Type:* java.lang.String

IPv6 address of the BGP interface outside Google Cloud Platform.

The address must be in the range 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64.
If you do not specify the next hop addresses, Google Cloud automatically
assigns unused addresses from the 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64 range for you.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#peer_ipv6_nexthop_address GoogleComputeRouterPeer#peer_ipv6_nexthop_address}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#project GoogleComputeRouterPeer#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where the router and BgpPeer reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#region GoogleComputeRouterPeer#region}

---

##### `routerApplianceInstance`<sup>Optional</sup> <a name="routerApplianceInstance" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.routerApplianceInstance"></a>

- *Type:* java.lang.String

The URI of the VM instance that is used as third-party router appliances such as Next Gen Firewalls, Virtual Routers, or Router Appliances.

The VM instance must be located in zones contained in the same region as
this Cloud Router. The VM instance is the peer side of the BGP session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#router_appliance_instance GoogleComputeRouterPeer#router_appliance_instance}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts">GoogleComputeRouterPeerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#timeouts GoogleComputeRouterPeer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putAdvertisedIpRanges">putAdvertisedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putBfd">putBfd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetAdvertisedGroups">resetAdvertisedGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetAdvertisedIpRanges">resetAdvertisedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetAdvertisedRoutePriority">resetAdvertisedRoutePriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetAdvertiseMode">resetAdvertiseMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetBfd">resetBfd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetEnableIpv6">resetEnableIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetIpv6NexthopAddress">resetIpv6NexthopAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetPeerIpAddress">resetPeerIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetPeerIpv6NexthopAddress">resetPeerIpv6NexthopAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetRouterApplianceInstance">resetRouterApplianceInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAdvertisedIpRanges` <a name="putAdvertisedIpRanges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putAdvertisedIpRanges"></a>

```java
public void putAdvertisedIpRanges(IResolvable OR java.util.List<GoogleComputeRouterPeerAdvertisedIpRanges> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putAdvertisedIpRanges.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges">GoogleComputeRouterPeerAdvertisedIpRanges</a>>

---

##### `putBfd` <a name="putBfd" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putBfd"></a>

```java
public void putBfd(GoogleComputeRouterPeerBfd value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putBfd.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd">GoogleComputeRouterPeerBfd</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeRouterPeerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts">GoogleComputeRouterPeerTimeouts</a>

---

##### `resetAdvertisedGroups` <a name="resetAdvertisedGroups" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetAdvertisedGroups"></a>

```java
public void resetAdvertisedGroups()
```

##### `resetAdvertisedIpRanges` <a name="resetAdvertisedIpRanges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetAdvertisedIpRanges"></a>

```java
public void resetAdvertisedIpRanges()
```

##### `resetAdvertisedRoutePriority` <a name="resetAdvertisedRoutePriority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetAdvertisedRoutePriority"></a>

```java
public void resetAdvertisedRoutePriority()
```

##### `resetAdvertiseMode` <a name="resetAdvertiseMode" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetAdvertiseMode"></a>

```java
public void resetAdvertiseMode()
```

##### `resetBfd` <a name="resetBfd" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetBfd"></a>

```java
public void resetBfd()
```

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetEnable"></a>

```java
public void resetEnable()
```

##### `resetEnableIpv6` <a name="resetEnableIpv6" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetEnableIpv6"></a>

```java
public void resetEnableIpv6()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetId"></a>

```java
public void resetId()
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetIpAddress"></a>

```java
public void resetIpAddress()
```

##### `resetIpv6NexthopAddress` <a name="resetIpv6NexthopAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetIpv6NexthopAddress"></a>

```java
public void resetIpv6NexthopAddress()
```

##### `resetPeerIpAddress` <a name="resetPeerIpAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetPeerIpAddress"></a>

```java
public void resetPeerIpAddress()
```

##### `resetPeerIpv6NexthopAddress` <a name="resetPeerIpv6NexthopAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetPeerIpv6NexthopAddress"></a>

```java
public void resetPeerIpv6NexthopAddress()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRouterApplianceInstance` <a name="resetRouterApplianceInstance" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetRouterApplianceInstance"></a>

```java
public void resetRouterApplianceInstance()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_router_peer.GoogleComputeRouterPeer;

GoogleComputeRouterPeer.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_router_peer.GoogleComputeRouterPeer;

GoogleComputeRouterPeer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_router_peer.GoogleComputeRouterPeer;

GoogleComputeRouterPeer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedIpRanges">advertisedIpRanges</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList">GoogleComputeRouterPeerAdvertisedIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.bfd">bfd</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference">GoogleComputeRouterPeerBfdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.managementType">managementType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference">GoogleComputeRouterPeerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedGroupsInput">advertisedGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedIpRangesInput">advertisedIpRangesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges">GoogleComputeRouterPeerAdvertisedIpRanges</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedRoutePriorityInput">advertisedRoutePriorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertiseModeInput">advertiseModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.bfdInput">bfdInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd">GoogleComputeRouterPeerBfd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableIpv6Input">enableIpv6Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.interfaceInput">interfaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipAddressInput">ipAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipv6NexthopAddressInput">ipv6NexthopAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerAsnInput">peerAsnInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpAddressInput">peerIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpv6NexthopAddressInput">peerIpv6NexthopAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.routerApplianceInstanceInput">routerApplianceInstanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.routerInput">routerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts">GoogleComputeRouterPeerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedGroups">advertisedGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedRoutePriority">advertisedRoutePriority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertiseMode">advertiseMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableIpv6">enableIpv6</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.interface">interface</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipv6NexthopAddress">ipv6NexthopAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerAsn">peerAsn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpAddress">peerIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpv6NexthopAddress">peerIpv6NexthopAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.router">router</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.routerApplianceInstance">routerApplianceInstance</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `advertisedIpRanges`<sup>Required</sup> <a name="advertisedIpRanges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedIpRanges"></a>

```java
public GoogleComputeRouterPeerAdvertisedIpRangesList getAdvertisedIpRanges();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList">GoogleComputeRouterPeerAdvertisedIpRangesList</a>

---

##### `bfd`<sup>Required</sup> <a name="bfd" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.bfd"></a>

```java
public GoogleComputeRouterPeerBfdOutputReference getBfd();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference">GoogleComputeRouterPeerBfdOutputReference</a>

---

##### `managementType`<sup>Required</sup> <a name="managementType" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.managementType"></a>

```java
public java.lang.String getManagementType();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.timeouts"></a>

```java
public GoogleComputeRouterPeerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference">GoogleComputeRouterPeerTimeoutsOutputReference</a>

---

##### `advertisedGroupsInput`<sup>Optional</sup> <a name="advertisedGroupsInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedGroupsInput"></a>

```java
public java.util.List<java.lang.String> getAdvertisedGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `advertisedIpRangesInput`<sup>Optional</sup> <a name="advertisedIpRangesInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedIpRangesInput"></a>

```java
public java.lang.Object getAdvertisedIpRangesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges">GoogleComputeRouterPeerAdvertisedIpRanges</a>>

---

##### `advertisedRoutePriorityInput`<sup>Optional</sup> <a name="advertisedRoutePriorityInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedRoutePriorityInput"></a>

```java
public java.lang.Number getAdvertisedRoutePriorityInput();
```

- *Type:* java.lang.Number

---

##### `advertiseModeInput`<sup>Optional</sup> <a name="advertiseModeInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertiseModeInput"></a>

```java
public java.lang.String getAdvertiseModeInput();
```

- *Type:* java.lang.String

---

##### `bfdInput`<sup>Optional</sup> <a name="bfdInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.bfdInput"></a>

```java
public GoogleComputeRouterPeerBfd getBfdInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd">GoogleComputeRouterPeerBfd</a>

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableInput"></a>

```java
public java.lang.Object getEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableIpv6Input`<sup>Optional</sup> <a name="enableIpv6Input" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableIpv6Input"></a>

```java
public java.lang.Object getEnableIpv6Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `interfaceInput`<sup>Optional</sup> <a name="interfaceInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.interfaceInput"></a>

```java
public java.lang.String getInterfaceInput();
```

- *Type:* java.lang.String

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipAddressInput"></a>

```java
public java.lang.String getIpAddressInput();
```

- *Type:* java.lang.String

---

##### `ipv6NexthopAddressInput`<sup>Optional</sup> <a name="ipv6NexthopAddressInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipv6NexthopAddressInput"></a>

```java
public java.lang.String getIpv6NexthopAddressInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `peerAsnInput`<sup>Optional</sup> <a name="peerAsnInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerAsnInput"></a>

```java
public java.lang.Number getPeerAsnInput();
```

- *Type:* java.lang.Number

---

##### `peerIpAddressInput`<sup>Optional</sup> <a name="peerIpAddressInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpAddressInput"></a>

```java
public java.lang.String getPeerIpAddressInput();
```

- *Type:* java.lang.String

---

##### `peerIpv6NexthopAddressInput`<sup>Optional</sup> <a name="peerIpv6NexthopAddressInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpv6NexthopAddressInput"></a>

```java
public java.lang.String getPeerIpv6NexthopAddressInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `routerApplianceInstanceInput`<sup>Optional</sup> <a name="routerApplianceInstanceInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.routerApplianceInstanceInput"></a>

```java
public java.lang.String getRouterApplianceInstanceInput();
```

- *Type:* java.lang.String

---

##### `routerInput`<sup>Optional</sup> <a name="routerInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.routerInput"></a>

```java
public java.lang.String getRouterInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts">GoogleComputeRouterPeerTimeouts</a>

---

##### `advertisedGroups`<sup>Required</sup> <a name="advertisedGroups" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedGroups"></a>

```java
public java.util.List<java.lang.String> getAdvertisedGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `advertisedRoutePriority`<sup>Required</sup> <a name="advertisedRoutePriority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertisedRoutePriority"></a>

```java
public java.lang.Number getAdvertisedRoutePriority();
```

- *Type:* java.lang.Number

---

##### `advertiseMode`<sup>Required</sup> <a name="advertiseMode" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.advertiseMode"></a>

```java
public java.lang.String getAdvertiseMode();
```

- *Type:* java.lang.String

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableIpv6`<sup>Required</sup> <a name="enableIpv6" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.enableIpv6"></a>

```java
public java.lang.Object getEnableIpv6();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.interface"></a>

```java
public java.lang.String getInterface();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `ipv6NexthopAddress`<sup>Required</sup> <a name="ipv6NexthopAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.ipv6NexthopAddress"></a>

```java
public java.lang.String getIpv6NexthopAddress();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `peerAsn`<sup>Required</sup> <a name="peerAsn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerAsn"></a>

```java
public java.lang.Number getPeerAsn();
```

- *Type:* java.lang.Number

---

##### `peerIpAddress`<sup>Required</sup> <a name="peerIpAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpAddress"></a>

```java
public java.lang.String getPeerIpAddress();
```

- *Type:* java.lang.String

---

##### `peerIpv6NexthopAddress`<sup>Required</sup> <a name="peerIpv6NexthopAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.peerIpv6NexthopAddress"></a>

```java
public java.lang.String getPeerIpv6NexthopAddress();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.router"></a>

```java
public java.lang.String getRouter();
```

- *Type:* java.lang.String

---

##### `routerApplianceInstance`<sup>Required</sup> <a name="routerApplianceInstance" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.routerApplianceInstance"></a>

```java
public java.lang.String getRouterApplianceInstance();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRouterPeerAdvertisedIpRanges <a name="GoogleComputeRouterPeerAdvertisedIpRanges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_router_peer.GoogleComputeRouterPeerAdvertisedIpRanges;

GoogleComputeRouterPeerAdvertisedIpRanges.builder()
    .range(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges.property.range">range</a></code> | <code>java.lang.String</code> | The IP range to advertise. The value must be a CIDR-formatted string. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges.property.description">description</a></code> | <code>java.lang.String</code> | User-specified description for the IP range. |

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges.property.range"></a>

```java
public java.lang.String getRange();
```

- *Type:* java.lang.String

The IP range to advertise. The value must be a CIDR-formatted string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#range GoogleComputeRouterPeer#range}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

User-specified description for the IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#description GoogleComputeRouterPeer#description}

---

### GoogleComputeRouterPeerBfd <a name="GoogleComputeRouterPeerBfd" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_router_peer.GoogleComputeRouterPeerBfd;

GoogleComputeRouterPeerBfd.builder()
    .sessionInitializationMode(java.lang.String)
//  .minReceiveInterval(java.lang.Number)
//  .minTransmitInterval(java.lang.Number)
//  .multiplier(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.property.sessionInitializationMode">sessionInitializationMode</a></code> | <code>java.lang.String</code> | The BFD session initialization mode for this BGP peer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.property.minReceiveInterval">minReceiveInterval</a></code> | <code>java.lang.Number</code> | The minimum interval, in milliseconds, between BFD control packets received from the peer router. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.property.minTransmitInterval">minTransmitInterval</a></code> | <code>java.lang.Number</code> | The minimum interval, in milliseconds, between BFD control packets transmitted to the peer router. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.property.multiplier">multiplier</a></code> | <code>java.lang.Number</code> | The number of consecutive BFD packets that must be missed before BFD declares that a peer is unavailable. |

---

##### `sessionInitializationMode`<sup>Required</sup> <a name="sessionInitializationMode" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.property.sessionInitializationMode"></a>

```java
public java.lang.String getSessionInitializationMode();
```

- *Type:* java.lang.String

The BFD session initialization mode for this BGP peer.

If set to 'ACTIVE', the Cloud Router will initiate the BFD session
for this BGP peer. If set to 'PASSIVE', the Cloud Router will wait
for the peer router to initiate the BFD session for this BGP peer.
If set to 'DISABLED', BFD is disabled for this BGP peer. Possible values: ["ACTIVE", "DISABLED", "PASSIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#session_initialization_mode GoogleComputeRouterPeer#session_initialization_mode}

---

##### `minReceiveInterval`<sup>Optional</sup> <a name="minReceiveInterval" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.property.minReceiveInterval"></a>

```java
public java.lang.Number getMinReceiveInterval();
```

- *Type:* java.lang.Number

The minimum interval, in milliseconds, between BFD control packets received from the peer router.

The actual value is negotiated
between the two routers and is equal to the greater of this value
and the transmit interval of the other router. If set, this value
must be between 1000 and 30000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#min_receive_interval GoogleComputeRouterPeer#min_receive_interval}

---

##### `minTransmitInterval`<sup>Optional</sup> <a name="minTransmitInterval" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.property.minTransmitInterval"></a>

```java
public java.lang.Number getMinTransmitInterval();
```

- *Type:* java.lang.Number

The minimum interval, in milliseconds, between BFD control packets transmitted to the peer router.

The actual value is negotiated
between the two routers and is equal to the greater of this value
and the corresponding receive interval of the other router. If set,
this value must be between 1000 and 30000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#min_transmit_interval GoogleComputeRouterPeer#min_transmit_interval}

---

##### `multiplier`<sup>Optional</sup> <a name="multiplier" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd.property.multiplier"></a>

```java
public java.lang.Number getMultiplier();
```

- *Type:* java.lang.Number

The number of consecutive BFD packets that must be missed before BFD declares that a peer is unavailable.

If set, the value must
be a value between 5 and 16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#multiplier GoogleComputeRouterPeer#multiplier}

---

### GoogleComputeRouterPeerConfig <a name="GoogleComputeRouterPeerConfig" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_router_peer.GoogleComputeRouterPeerConfig;

GoogleComputeRouterPeerConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .interface(java.lang.String)
    .name(java.lang.String)
    .peerAsn(java.lang.Number)
    .router(java.lang.String)
//  .advertisedGroups(java.util.List<java.lang.String>)
//  .advertisedIpRanges(IResolvable)
//  .advertisedIpRanges(java.util.List<GoogleComputeRouterPeerAdvertisedIpRanges>)
//  .advertisedRoutePriority(java.lang.Number)
//  .advertiseMode(java.lang.String)
//  .bfd(GoogleComputeRouterPeerBfd)
//  .enable(java.lang.Boolean)
//  .enable(IResolvable)
//  .enableIpv6(java.lang.Boolean)
//  .enableIpv6(IResolvable)
//  .id(java.lang.String)
//  .ipAddress(java.lang.String)
//  .ipv6NexthopAddress(java.lang.String)
//  .peerIpAddress(java.lang.String)
//  .peerIpv6NexthopAddress(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .routerApplianceInstance(java.lang.String)
//  .timeouts(GoogleComputeRouterPeerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.interface">interface</a></code> | <code>java.lang.String</code> | Name of the interface the BGP peer is associated with. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of this BGP peer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.peerAsn">peerAsn</a></code> | <code>java.lang.Number</code> | Peer BGP Autonomous System Number (ASN). Each BGP interface may use a different value. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.router">router</a></code> | <code>java.lang.String</code> | The name of the Cloud Router in which this BgpPeer will be configured. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.advertisedGroups">advertisedGroups</a></code> | <code>java.util.List<java.lang.String></code> | User-specified list of prefix groups to advertise in custom mode, which can take one of the following options:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.advertisedIpRanges">advertisedIpRanges</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges">GoogleComputeRouterPeerAdvertisedIpRanges</a>></code> | advertised_ip_ranges block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.advertisedRoutePriority">advertisedRoutePriority</a></code> | <code>java.lang.Number</code> | The priority of routes advertised to this BGP peer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.advertiseMode">advertiseMode</a></code> | <code>java.lang.String</code> | User-specified flag to indicate which mode to use for advertisement. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.bfd">bfd</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd">GoogleComputeRouterPeerBfd</a></code> | bfd block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The status of the BGP peer connection. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.enableIpv6">enableIpv6</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable IPv6 traffic over BGP Peer. If not specified, it is disabled by default. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#id GoogleComputeRouterPeer#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | IP address of the interface inside Google Cloud Platform. Only IPv4 is supported. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.ipv6NexthopAddress">ipv6NexthopAddress</a></code> | <code>java.lang.String</code> | IPv6 address of the interface inside Google Cloud Platform. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.peerIpAddress">peerIpAddress</a></code> | <code>java.lang.String</code> | IP address of the BGP interface outside Google Cloud Platform. Only IPv4 is supported. Required if 'ip_address' is set. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.peerIpv6NexthopAddress">peerIpv6NexthopAddress</a></code> | <code>java.lang.String</code> | IPv6 address of the BGP interface outside Google Cloud Platform. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#project GoogleComputeRouterPeer#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where the router and BgpPeer reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.routerApplianceInstance">routerApplianceInstance</a></code> | <code>java.lang.String</code> | The URI of the VM instance that is used as third-party router appliances such as Next Gen Firewalls, Virtual Routers, or Router Appliances. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts">GoogleComputeRouterPeerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.interface"></a>

```java
public java.lang.String getInterface();
```

- *Type:* java.lang.String

Name of the interface the BGP peer is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#interface GoogleComputeRouterPeer#interface}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of this BGP peer.

The name must be 1-63 characters long,
and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#name GoogleComputeRouterPeer#name}

---

##### `peerAsn`<sup>Required</sup> <a name="peerAsn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.peerAsn"></a>

```java
public java.lang.Number getPeerAsn();
```

- *Type:* java.lang.Number

Peer BGP Autonomous System Number (ASN). Each BGP interface may use a different value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#peer_asn GoogleComputeRouterPeer#peer_asn}

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.router"></a>

```java
public java.lang.String getRouter();
```

- *Type:* java.lang.String

The name of the Cloud Router in which this BgpPeer will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#router GoogleComputeRouterPeer#router}

---

##### `advertisedGroups`<sup>Optional</sup> <a name="advertisedGroups" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.advertisedGroups"></a>

```java
public java.util.List<java.lang.String> getAdvertisedGroups();
```

- *Type:* java.util.List<java.lang.String>

User-specified list of prefix groups to advertise in custom mode, which can take one of the following options:.

'ALL_SUBNETS': Advertises all available subnets, including peer VPC subnets.
'ALL_VPC_SUBNETS': Advertises the router's own VPC subnets.
'ALL_PEER_VPC_SUBNETS': Advertises peer subnets of the router's VPC network.

Note that this field can only be populated if advertiseMode is 'CUSTOM'
and overrides the list defined for the router (in the "bgp" message).
These groups are advertised in addition to any specified prefixes.
Leave this field blank to advertise no custom groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#advertised_groups GoogleComputeRouterPeer#advertised_groups}

---

##### `advertisedIpRanges`<sup>Optional</sup> <a name="advertisedIpRanges" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.advertisedIpRanges"></a>

```java
public java.lang.Object getAdvertisedIpRanges();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges">GoogleComputeRouterPeerAdvertisedIpRanges</a>>

advertised_ip_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#advertised_ip_ranges GoogleComputeRouterPeer#advertised_ip_ranges}

---

##### `advertisedRoutePriority`<sup>Optional</sup> <a name="advertisedRoutePriority" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.advertisedRoutePriority"></a>

```java
public java.lang.Number getAdvertisedRoutePriority();
```

- *Type:* java.lang.Number

The priority of routes advertised to this BGP peer.

Where there is more than one matching route of maximum
length, the routes with the lowest priority value win.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#advertised_route_priority GoogleComputeRouterPeer#advertised_route_priority}

---

##### `advertiseMode`<sup>Optional</sup> <a name="advertiseMode" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.advertiseMode"></a>

```java
public java.lang.String getAdvertiseMode();
```

- *Type:* java.lang.String

User-specified flag to indicate which mode to use for advertisement.

Valid values of this enum field are: 'DEFAULT', 'CUSTOM' Default value: "DEFAULT" Possible values: ["DEFAULT", "CUSTOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#advertise_mode GoogleComputeRouterPeer#advertise_mode}

---

##### `bfd`<sup>Optional</sup> <a name="bfd" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.bfd"></a>

```java
public GoogleComputeRouterPeerBfd getBfd();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd">GoogleComputeRouterPeerBfd</a>

bfd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#bfd GoogleComputeRouterPeer#bfd}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The status of the BGP peer connection.

If set to false, any active session
with the peer is terminated and all associated routing information is removed.
If set to true, the peer connection can be established with routing information.
The default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#enable GoogleComputeRouterPeer#enable}

---

##### `enableIpv6`<sup>Optional</sup> <a name="enableIpv6" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.enableIpv6"></a>

```java
public java.lang.Object getEnableIpv6();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable IPv6 traffic over BGP Peer. If not specified, it is disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#enable_ipv6 GoogleComputeRouterPeer#enable_ipv6}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#id GoogleComputeRouterPeer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

IP address of the interface inside Google Cloud Platform. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#ip_address GoogleComputeRouterPeer#ip_address}

---

##### `ipv6NexthopAddress`<sup>Optional</sup> <a name="ipv6NexthopAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.ipv6NexthopAddress"></a>

```java
public java.lang.String getIpv6NexthopAddress();
```

- *Type:* java.lang.String

IPv6 address of the interface inside Google Cloud Platform.

The address must be in the range 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64.
If you do not specify the next hop addresses, Google Cloud automatically
assigns unused addresses from the 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64 range for you.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#ipv6_nexthop_address GoogleComputeRouterPeer#ipv6_nexthop_address}

---

##### `peerIpAddress`<sup>Optional</sup> <a name="peerIpAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.peerIpAddress"></a>

```java
public java.lang.String getPeerIpAddress();
```

- *Type:* java.lang.String

IP address of the BGP interface outside Google Cloud Platform. Only IPv4 is supported. Required if 'ip_address' is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#peer_ip_address GoogleComputeRouterPeer#peer_ip_address}

---

##### `peerIpv6NexthopAddress`<sup>Optional</sup> <a name="peerIpv6NexthopAddress" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.peerIpv6NexthopAddress"></a>

```java
public java.lang.String getPeerIpv6NexthopAddress();
```

- *Type:* java.lang.String

IPv6 address of the BGP interface outside Google Cloud Platform.

The address must be in the range 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64.
If you do not specify the next hop addresses, Google Cloud automatically
assigns unused addresses from the 2600:2d00:0:2::/64 or 2600:2d00:0:3::/64 range for you.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#peer_ipv6_nexthop_address GoogleComputeRouterPeer#peer_ipv6_nexthop_address}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#project GoogleComputeRouterPeer#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where the router and BgpPeer reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#region GoogleComputeRouterPeer#region}

---

##### `routerApplianceInstance`<sup>Optional</sup> <a name="routerApplianceInstance" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.routerApplianceInstance"></a>

```java
public java.lang.String getRouterApplianceInstance();
```

- *Type:* java.lang.String

The URI of the VM instance that is used as third-party router appliances such as Next Gen Firewalls, Virtual Routers, or Router Appliances.

The VM instance must be located in zones contained in the same region as
this Cloud Router. The VM instance is the peer side of the BGP session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#router_appliance_instance GoogleComputeRouterPeer#router_appliance_instance}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerConfig.property.timeouts"></a>

```java
public GoogleComputeRouterPeerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts">GoogleComputeRouterPeerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#timeouts GoogleComputeRouterPeer#timeouts}

---

### GoogleComputeRouterPeerTimeouts <a name="GoogleComputeRouterPeerTimeouts" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_router_peer.GoogleComputeRouterPeerTimeouts;

GoogleComputeRouterPeerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#create GoogleComputeRouterPeer#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#delete GoogleComputeRouterPeer#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#update GoogleComputeRouterPeer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#create GoogleComputeRouterPeer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#delete GoogleComputeRouterPeer#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_compute_router_peer#update GoogleComputeRouterPeer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRouterPeerAdvertisedIpRangesList <a name="GoogleComputeRouterPeerAdvertisedIpRangesList" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_router_peer.GoogleComputeRouterPeerAdvertisedIpRangesList;

new GoogleComputeRouterPeerAdvertisedIpRangesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.get"></a>

```java
public GoogleComputeRouterPeerAdvertisedIpRangesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges">GoogleComputeRouterPeerAdvertisedIpRanges</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges">GoogleComputeRouterPeerAdvertisedIpRanges</a>>

---


### GoogleComputeRouterPeerAdvertisedIpRangesOutputReference <a name="GoogleComputeRouterPeerAdvertisedIpRangesOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_router_peer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference;

new GoogleComputeRouterPeerAdvertisedIpRangesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.rangeInput">rangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.range">range</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges">GoogleComputeRouterPeerAdvertisedIpRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.rangeInput"></a>

```java
public java.lang.String getRangeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.range"></a>

```java
public java.lang.String getRange();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRangesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerAdvertisedIpRanges">GoogleComputeRouterPeerAdvertisedIpRanges</a>

---


### GoogleComputeRouterPeerBfdOutputReference <a name="GoogleComputeRouterPeerBfdOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_router_peer.GoogleComputeRouterPeerBfdOutputReference;

new GoogleComputeRouterPeerBfdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resetMinReceiveInterval">resetMinReceiveInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resetMinTransmitInterval">resetMinTransmitInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resetMultiplier">resetMultiplier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinReceiveInterval` <a name="resetMinReceiveInterval" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resetMinReceiveInterval"></a>

```java
public void resetMinReceiveInterval()
```

##### `resetMinTransmitInterval` <a name="resetMinTransmitInterval" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resetMinTransmitInterval"></a>

```java
public void resetMinTransmitInterval()
```

##### `resetMultiplier` <a name="resetMultiplier" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.resetMultiplier"></a>

```java
public void resetMultiplier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.minReceiveIntervalInput">minReceiveIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.minTransmitIntervalInput">minTransmitIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.multiplierInput">multiplierInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.sessionInitializationModeInput">sessionInitializationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.minReceiveInterval">minReceiveInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.minTransmitInterval">minTransmitInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.multiplier">multiplier</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.sessionInitializationMode">sessionInitializationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd">GoogleComputeRouterPeerBfd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `minReceiveIntervalInput`<sup>Optional</sup> <a name="minReceiveIntervalInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.minReceiveIntervalInput"></a>

```java
public java.lang.Number getMinReceiveIntervalInput();
```

- *Type:* java.lang.Number

---

##### `minTransmitIntervalInput`<sup>Optional</sup> <a name="minTransmitIntervalInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.minTransmitIntervalInput"></a>

```java
public java.lang.Number getMinTransmitIntervalInput();
```

- *Type:* java.lang.Number

---

##### `multiplierInput`<sup>Optional</sup> <a name="multiplierInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.multiplierInput"></a>

```java
public java.lang.Number getMultiplierInput();
```

- *Type:* java.lang.Number

---

##### `sessionInitializationModeInput`<sup>Optional</sup> <a name="sessionInitializationModeInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.sessionInitializationModeInput"></a>

```java
public java.lang.String getSessionInitializationModeInput();
```

- *Type:* java.lang.String

---

##### `minReceiveInterval`<sup>Required</sup> <a name="minReceiveInterval" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.minReceiveInterval"></a>

```java
public java.lang.Number getMinReceiveInterval();
```

- *Type:* java.lang.Number

---

##### `minTransmitInterval`<sup>Required</sup> <a name="minTransmitInterval" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.minTransmitInterval"></a>

```java
public java.lang.Number getMinTransmitInterval();
```

- *Type:* java.lang.Number

---

##### `multiplier`<sup>Required</sup> <a name="multiplier" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.multiplier"></a>

```java
public java.lang.Number getMultiplier();
```

- *Type:* java.lang.Number

---

##### `sessionInitializationMode`<sup>Required</sup> <a name="sessionInitializationMode" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.sessionInitializationMode"></a>

```java
public java.lang.String getSessionInitializationMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfdOutputReference.property.internalValue"></a>

```java
public GoogleComputeRouterPeerBfd getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerBfd">GoogleComputeRouterPeerBfd</a>

---


### GoogleComputeRouterPeerTimeoutsOutputReference <a name="GoogleComputeRouterPeerTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_router_peer.GoogleComputeRouterPeerTimeoutsOutputReference;

new GoogleComputeRouterPeerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts">GoogleComputeRouterPeerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRouterPeer.GoogleComputeRouterPeerTimeouts">GoogleComputeRouterPeerTimeouts</a>

---



