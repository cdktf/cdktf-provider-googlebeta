# `googleComputeVpnTunnel` Submodule <a name="`googleComputeVpnTunnel` Submodule" id="@cdktf/provider-google-beta.googleComputeVpnTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeVpnTunnel <a name="GoogleComputeVpnTunnel" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel google_compute_vpn_tunnel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_vpn_tunnel.GoogleComputeVpnTunnel;

GoogleComputeVpnTunnel.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .sharedSecret(java.lang.String)
//  .cipherSuite(GoogleComputeVpnTunnelCipherSuite)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ikeVersion(java.lang.Number)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .localTrafficSelector(java.util.List<java.lang.String>)
//  .peerExternalGateway(java.lang.String)
//  .peerExternalGatewayInterface(java.lang.Number)
//  .peerGcpGateway(java.lang.String)
//  .peerIp(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .remoteTrafficSelector(java.util.List<java.lang.String>)
//  .router(java.lang.String)
//  .targetVpnGateway(java.lang.String)
//  .timeouts(GoogleComputeVpnTunnelTimeouts)
//  .vpnGateway(java.lang.String)
//  .vpnGatewayInterface(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.sharedSecret">sharedSecret</a></code> | <code>java.lang.String</code> | Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.cipherSuite">cipherSuite</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite">GoogleComputeVpnTunnelCipherSuite</a></code> | cipher_suite block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#id GoogleComputeVpnTunnel#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.ikeVersion">ikeVersion</a></code> | <code>java.lang.Number</code> | IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to apply to this VpnTunnel. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.localTrafficSelector">localTrafficSelector</a></code> | <code>java.util.List<java.lang.String></code> | Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.peerExternalGateway">peerExternalGateway</a></code> | <code>java.lang.String</code> | URL of the peer side external VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.peerExternalGatewayInterface">peerExternalGatewayInterface</a></code> | <code>java.lang.Number</code> | The interface ID of the external VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.peerGcpGateway">peerGcpGateway</a></code> | <code>java.lang.String</code> | URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.peerIp">peerIp</a></code> | <code>java.lang.String</code> | IP address of the peer VPN gateway. Only IPv4 is supported. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#project GoogleComputeVpnTunnel#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.remoteTrafficSelector">remoteTrafficSelector</a></code> | <code>java.util.List<java.lang.String></code> | Remote traffic selector to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.router">router</a></code> | <code>java.lang.String</code> | URL of router resource to be used for dynamic routing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.targetVpnGateway">targetVpnGateway</a></code> | <code>java.lang.String</code> | URL of the Target VPN gateway with which this VPN tunnel is associated. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts">GoogleComputeVpnTunnelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.vpnGateway">vpnGateway</a></code> | <code>java.lang.String</code> | URL of the VPN gateway with which this VPN tunnel is associated. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.vpnGatewayInterface">vpnGatewayInterface</a></code> | <code>java.lang.Number</code> | The interface ID of the VPN gateway with which this VPN tunnel is associated. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63
characters long and match the regular expression
'[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first character
must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#name GoogleComputeVpnTunnel#name}

---

##### `sharedSecret`<sup>Required</sup> <a name="sharedSecret" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.sharedSecret"></a>

- *Type:* java.lang.String

Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#shared_secret GoogleComputeVpnTunnel#shared_secret}

---

##### `cipherSuite`<sup>Optional</sup> <a name="cipherSuite" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.cipherSuite"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite">GoogleComputeVpnTunnelCipherSuite</a>

cipher_suite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#cipher_suite GoogleComputeVpnTunnel#cipher_suite}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#description GoogleComputeVpnTunnel#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#id GoogleComputeVpnTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ikeVersion`<sup>Optional</sup> <a name="ikeVersion" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.ikeVersion"></a>

- *Type:* java.lang.Number

IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway.

Acceptable IKE versions are 1 or 2. Default version is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#ike_version GoogleComputeVpnTunnel#ike_version}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels to apply to this VpnTunnel.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#labels GoogleComputeVpnTunnel#labels}

---

##### `localTrafficSelector`<sup>Optional</sup> <a name="localTrafficSelector" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.localTrafficSelector"></a>

- *Type:* java.util.List<java.lang.String>

Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway.

The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#local_traffic_selector GoogleComputeVpnTunnel#local_traffic_selector}

---

##### `peerExternalGateway`<sup>Optional</sup> <a name="peerExternalGateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.peerExternalGateway"></a>

- *Type:* java.lang.String

URL of the peer side external VPN gateway to which this VPN tunnel is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#peer_external_gateway GoogleComputeVpnTunnel#peer_external_gateway}

---

##### `peerExternalGatewayInterface`<sup>Optional</sup> <a name="peerExternalGatewayInterface" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.peerExternalGatewayInterface"></a>

- *Type:* java.lang.Number

The interface ID of the external VPN gateway to which this VPN tunnel is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#peer_external_gateway_interface GoogleComputeVpnTunnel#peer_external_gateway_interface}

---

##### `peerGcpGateway`<sup>Optional</sup> <a name="peerGcpGateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.peerGcpGateway"></a>

- *Type:* java.lang.String

URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected.

If provided, the VPN tunnel will automatically use the same vpn_gateway_interface
ID in the peer GCP VPN gateway.
This field must reference a 'google_compute_ha_vpn_gateway' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#peer_gcp_gateway GoogleComputeVpnTunnel#peer_gcp_gateway}

---

##### `peerIp`<sup>Optional</sup> <a name="peerIp" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.peerIp"></a>

- *Type:* java.lang.String

IP address of the peer VPN gateway. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#peer_ip GoogleComputeVpnTunnel#peer_ip}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#project GoogleComputeVpnTunnel#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#region GoogleComputeVpnTunnel#region}

---

##### `remoteTrafficSelector`<sup>Optional</sup> <a name="remoteTrafficSelector" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.remoteTrafficSelector"></a>

- *Type:* java.util.List<java.lang.String>

Remote traffic selector to use when establishing the VPN tunnel with peer VPN gateway.

The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#remote_traffic_selector GoogleComputeVpnTunnel#remote_traffic_selector}

---

##### `router`<sup>Optional</sup> <a name="router" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.router"></a>

- *Type:* java.lang.String

URL of router resource to be used for dynamic routing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#router GoogleComputeVpnTunnel#router}

---

##### `targetVpnGateway`<sup>Optional</sup> <a name="targetVpnGateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.targetVpnGateway"></a>

- *Type:* java.lang.String

URL of the Target VPN gateway with which this VPN tunnel is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#target_vpn_gateway GoogleComputeVpnTunnel#target_vpn_gateway}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts">GoogleComputeVpnTunnelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#timeouts GoogleComputeVpnTunnel#timeouts}

---

##### `vpnGateway`<sup>Optional</sup> <a name="vpnGateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.vpnGateway"></a>

- *Type:* java.lang.String

URL of the VPN gateway with which this VPN tunnel is associated.

This must be used if a High Availability VPN gateway resource is created.
This field must reference a 'google_compute_ha_vpn_gateway' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#vpn_gateway GoogleComputeVpnTunnel#vpn_gateway}

---

##### `vpnGatewayInterface`<sup>Optional</sup> <a name="vpnGatewayInterface" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.vpnGatewayInterface"></a>

- *Type:* java.lang.Number

The interface ID of the VPN gateway with which this VPN tunnel is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#vpn_gateway_interface GoogleComputeVpnTunnel#vpn_gateway_interface}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.putCipherSuite">putCipherSuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetCipherSuite">resetCipherSuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetIkeVersion">resetIkeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetLocalTrafficSelector">resetLocalTrafficSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetPeerExternalGateway">resetPeerExternalGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetPeerExternalGatewayInterface">resetPeerExternalGatewayInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetPeerGcpGateway">resetPeerGcpGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetPeerIp">resetPeerIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetRemoteTrafficSelector">resetRemoteTrafficSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetRouter">resetRouter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetTargetVpnGateway">resetTargetVpnGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetVpnGateway">resetVpnGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetVpnGatewayInterface">resetVpnGatewayInterface</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCipherSuite` <a name="putCipherSuite" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.putCipherSuite"></a>

```java
public void putCipherSuite(GoogleComputeVpnTunnelCipherSuite value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.putCipherSuite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite">GoogleComputeVpnTunnelCipherSuite</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeVpnTunnelTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts">GoogleComputeVpnTunnelTimeouts</a>

---

##### `resetCipherSuite` <a name="resetCipherSuite" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetCipherSuite"></a>

```java
public void resetCipherSuite()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetId"></a>

```java
public void resetId()
```

##### `resetIkeVersion` <a name="resetIkeVersion" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetIkeVersion"></a>

```java
public void resetIkeVersion()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocalTrafficSelector` <a name="resetLocalTrafficSelector" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetLocalTrafficSelector"></a>

```java
public void resetLocalTrafficSelector()
```

##### `resetPeerExternalGateway` <a name="resetPeerExternalGateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetPeerExternalGateway"></a>

```java
public void resetPeerExternalGateway()
```

##### `resetPeerExternalGatewayInterface` <a name="resetPeerExternalGatewayInterface" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetPeerExternalGatewayInterface"></a>

```java
public void resetPeerExternalGatewayInterface()
```

##### `resetPeerGcpGateway` <a name="resetPeerGcpGateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetPeerGcpGateway"></a>

```java
public void resetPeerGcpGateway()
```

##### `resetPeerIp` <a name="resetPeerIp" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetPeerIp"></a>

```java
public void resetPeerIp()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRemoteTrafficSelector` <a name="resetRemoteTrafficSelector" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetRemoteTrafficSelector"></a>

```java
public void resetRemoteTrafficSelector()
```

##### `resetRouter` <a name="resetRouter" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetRouter"></a>

```java
public void resetRouter()
```

##### `resetTargetVpnGateway` <a name="resetTargetVpnGateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetTargetVpnGateway"></a>

```java
public void resetTargetVpnGateway()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVpnGateway` <a name="resetVpnGateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetVpnGateway"></a>

```java
public void resetVpnGateway()
```

##### `resetVpnGatewayInterface` <a name="resetVpnGatewayInterface" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetVpnGatewayInterface"></a>

```java
public void resetVpnGatewayInterface()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeVpnTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_vpn_tunnel.GoogleComputeVpnTunnel;

GoogleComputeVpnTunnel.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_vpn_tunnel.GoogleComputeVpnTunnel;

GoogleComputeVpnTunnel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_vpn_tunnel.GoogleComputeVpnTunnel;

GoogleComputeVpnTunnel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_vpn_tunnel.GoogleComputeVpnTunnel;

GoogleComputeVpnTunnel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeVpnTunnel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleComputeVpnTunnel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeVpnTunnel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeVpnTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeVpnTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.cipherSuite">cipherSuite</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference">GoogleComputeVpnTunnelCipherSuiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.detailedStatus">detailedStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.labelFingerprint">labelFingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.sharedSecretHash">sharedSecretHash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference">GoogleComputeVpnTunnelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.tunnelId">tunnelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.cipherSuiteInput">cipherSuiteInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite">GoogleComputeVpnTunnelCipherSuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.ikeVersionInput">ikeVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.localTrafficSelectorInput">localTrafficSelectorInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerExternalGatewayInput">peerExternalGatewayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerExternalGatewayInterfaceInput">peerExternalGatewayInterfaceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerGcpGatewayInput">peerGcpGatewayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerIpInput">peerIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.remoteTrafficSelectorInput">remoteTrafficSelectorInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.routerInput">routerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.sharedSecretInput">sharedSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.targetVpnGatewayInput">targetVpnGatewayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts">GoogleComputeVpnTunnelTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.vpnGatewayInput">vpnGatewayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.vpnGatewayInterfaceInput">vpnGatewayInterfaceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.ikeVersion">ikeVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.localTrafficSelector">localTrafficSelector</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerExternalGateway">peerExternalGateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerExternalGatewayInterface">peerExternalGatewayInterface</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerGcpGateway">peerGcpGateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerIp">peerIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.remoteTrafficSelector">remoteTrafficSelector</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.router">router</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.sharedSecret">sharedSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.targetVpnGateway">targetVpnGateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.vpnGateway">vpnGateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.vpnGatewayInterface">vpnGatewayInterface</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cipherSuite`<sup>Required</sup> <a name="cipherSuite" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.cipherSuite"></a>

```java
public GoogleComputeVpnTunnelCipherSuiteOutputReference getCipherSuite();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference">GoogleComputeVpnTunnelCipherSuiteOutputReference</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `detailedStatus`<sup>Required</sup> <a name="detailedStatus" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.detailedStatus"></a>

```java
public java.lang.String getDetailedStatus();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.labelFingerprint"></a>

```java
public java.lang.String getLabelFingerprint();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `sharedSecretHash`<sup>Required</sup> <a name="sharedSecretHash" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.sharedSecretHash"></a>

```java
public java.lang.String getSharedSecretHash();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.timeouts"></a>

```java
public GoogleComputeVpnTunnelTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference">GoogleComputeVpnTunnelTimeoutsOutputReference</a>

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.tunnelId"></a>

```java
public java.lang.String getTunnelId();
```

- *Type:* java.lang.String

---

##### `cipherSuiteInput`<sup>Optional</sup> <a name="cipherSuiteInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.cipherSuiteInput"></a>

```java
public GoogleComputeVpnTunnelCipherSuite getCipherSuiteInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite">GoogleComputeVpnTunnelCipherSuite</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ikeVersionInput`<sup>Optional</sup> <a name="ikeVersionInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.ikeVersionInput"></a>

```java
public java.lang.Number getIkeVersionInput();
```

- *Type:* java.lang.Number

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `localTrafficSelectorInput`<sup>Optional</sup> <a name="localTrafficSelectorInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.localTrafficSelectorInput"></a>

```java
public java.util.List<java.lang.String> getLocalTrafficSelectorInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `peerExternalGatewayInput`<sup>Optional</sup> <a name="peerExternalGatewayInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerExternalGatewayInput"></a>

```java
public java.lang.String getPeerExternalGatewayInput();
```

- *Type:* java.lang.String

---

##### `peerExternalGatewayInterfaceInput`<sup>Optional</sup> <a name="peerExternalGatewayInterfaceInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerExternalGatewayInterfaceInput"></a>

```java
public java.lang.Number getPeerExternalGatewayInterfaceInput();
```

- *Type:* java.lang.Number

---

##### `peerGcpGatewayInput`<sup>Optional</sup> <a name="peerGcpGatewayInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerGcpGatewayInput"></a>

```java
public java.lang.String getPeerGcpGatewayInput();
```

- *Type:* java.lang.String

---

##### `peerIpInput`<sup>Optional</sup> <a name="peerIpInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerIpInput"></a>

```java
public java.lang.String getPeerIpInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `remoteTrafficSelectorInput`<sup>Optional</sup> <a name="remoteTrafficSelectorInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.remoteTrafficSelectorInput"></a>

```java
public java.util.List<java.lang.String> getRemoteTrafficSelectorInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `routerInput`<sup>Optional</sup> <a name="routerInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.routerInput"></a>

```java
public java.lang.String getRouterInput();
```

- *Type:* java.lang.String

---

##### `sharedSecretInput`<sup>Optional</sup> <a name="sharedSecretInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.sharedSecretInput"></a>

```java
public java.lang.String getSharedSecretInput();
```

- *Type:* java.lang.String

---

##### `targetVpnGatewayInput`<sup>Optional</sup> <a name="targetVpnGatewayInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.targetVpnGatewayInput"></a>

```java
public java.lang.String getTargetVpnGatewayInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts">GoogleComputeVpnTunnelTimeouts</a>

---

##### `vpnGatewayInput`<sup>Optional</sup> <a name="vpnGatewayInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.vpnGatewayInput"></a>

```java
public java.lang.String getVpnGatewayInput();
```

- *Type:* java.lang.String

---

##### `vpnGatewayInterfaceInput`<sup>Optional</sup> <a name="vpnGatewayInterfaceInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.vpnGatewayInterfaceInput"></a>

```java
public java.lang.Number getVpnGatewayInterfaceInput();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ikeVersion`<sup>Required</sup> <a name="ikeVersion" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.ikeVersion"></a>

```java
public java.lang.Number getIkeVersion();
```

- *Type:* java.lang.Number

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `localTrafficSelector`<sup>Required</sup> <a name="localTrafficSelector" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.localTrafficSelector"></a>

```java
public java.util.List<java.lang.String> getLocalTrafficSelector();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `peerExternalGateway`<sup>Required</sup> <a name="peerExternalGateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerExternalGateway"></a>

```java
public java.lang.String getPeerExternalGateway();
```

- *Type:* java.lang.String

---

##### `peerExternalGatewayInterface`<sup>Required</sup> <a name="peerExternalGatewayInterface" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerExternalGatewayInterface"></a>

```java
public java.lang.Number getPeerExternalGatewayInterface();
```

- *Type:* java.lang.Number

---

##### `peerGcpGateway`<sup>Required</sup> <a name="peerGcpGateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerGcpGateway"></a>

```java
public java.lang.String getPeerGcpGateway();
```

- *Type:* java.lang.String

---

##### `peerIp`<sup>Required</sup> <a name="peerIp" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerIp"></a>

```java
public java.lang.String getPeerIp();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `remoteTrafficSelector`<sup>Required</sup> <a name="remoteTrafficSelector" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.remoteTrafficSelector"></a>

```java
public java.util.List<java.lang.String> getRemoteTrafficSelector();
```

- *Type:* java.util.List<java.lang.String>

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.router"></a>

```java
public java.lang.String getRouter();
```

- *Type:* java.lang.String

---

##### `sharedSecret`<sup>Required</sup> <a name="sharedSecret" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.sharedSecret"></a>

```java
public java.lang.String getSharedSecret();
```

- *Type:* java.lang.String

---

##### `targetVpnGateway`<sup>Required</sup> <a name="targetVpnGateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.targetVpnGateway"></a>

```java
public java.lang.String getTargetVpnGateway();
```

- *Type:* java.lang.String

---

##### `vpnGateway`<sup>Required</sup> <a name="vpnGateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.vpnGateway"></a>

```java
public java.lang.String getVpnGateway();
```

- *Type:* java.lang.String

---

##### `vpnGatewayInterface`<sup>Required</sup> <a name="vpnGatewayInterface" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.vpnGatewayInterface"></a>

```java
public java.lang.Number getVpnGatewayInterface();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeVpnTunnelCipherSuite <a name="GoogleComputeVpnTunnelCipherSuite" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_vpn_tunnel.GoogleComputeVpnTunnelCipherSuite;

GoogleComputeVpnTunnelCipherSuite.builder()
//  .phase1(GoogleComputeVpnTunnelCipherSuitePhase1)
//  .phase2(GoogleComputeVpnTunnelCipherSuitePhase2)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite.property.phase1">phase1</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1">GoogleComputeVpnTunnelCipherSuitePhase1</a></code> | phase1 block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite.property.phase2">phase2</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2">GoogleComputeVpnTunnelCipherSuitePhase2</a></code> | phase2 block. |

---

##### `phase1`<sup>Optional</sup> <a name="phase1" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite.property.phase1"></a>

```java
public GoogleComputeVpnTunnelCipherSuitePhase1 getPhase1();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1">GoogleComputeVpnTunnelCipherSuitePhase1</a>

phase1 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#phase1 GoogleComputeVpnTunnel#phase1}

---

##### `phase2`<sup>Optional</sup> <a name="phase2" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite.property.phase2"></a>

```java
public GoogleComputeVpnTunnelCipherSuitePhase2 getPhase2();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2">GoogleComputeVpnTunnelCipherSuitePhase2</a>

phase2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#phase2 GoogleComputeVpnTunnel#phase2}

---

### GoogleComputeVpnTunnelCipherSuitePhase1 <a name="GoogleComputeVpnTunnelCipherSuitePhase1" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_vpn_tunnel.GoogleComputeVpnTunnelCipherSuitePhase1;

GoogleComputeVpnTunnelCipherSuitePhase1.builder()
//  .dh(java.util.List<java.lang.String>)
//  .encryption(java.util.List<java.lang.String>)
//  .integrity(java.util.List<java.lang.String>)
//  .prf(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1.property.dh">dh</a></code> | <code>java.util.List<java.lang.String></code> | Diffie-Hellman groups. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1.property.encryption">encryption</a></code> | <code>java.util.List<java.lang.String></code> | Encryption algorithms. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1.property.integrity">integrity</a></code> | <code>java.util.List<java.lang.String></code> | Integrity algorithms. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1.property.prf">prf</a></code> | <code>java.util.List<java.lang.String></code> | Pseudo-random functions. |

---

##### `dh`<sup>Optional</sup> <a name="dh" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1.property.dh"></a>

```java
public java.util.List<java.lang.String> getDh();
```

- *Type:* java.util.List<java.lang.String>

Diffie-Hellman groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#dh GoogleComputeVpnTunnel#dh}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1.property.encryption"></a>

```java
public java.util.List<java.lang.String> getEncryption();
```

- *Type:* java.util.List<java.lang.String>

Encryption algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#encryption GoogleComputeVpnTunnel#encryption}

---

##### `integrity`<sup>Optional</sup> <a name="integrity" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1.property.integrity"></a>

```java
public java.util.List<java.lang.String> getIntegrity();
```

- *Type:* java.util.List<java.lang.String>

Integrity algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#integrity GoogleComputeVpnTunnel#integrity}

---

##### `prf`<sup>Optional</sup> <a name="prf" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1.property.prf"></a>

```java
public java.util.List<java.lang.String> getPrf();
```

- *Type:* java.util.List<java.lang.String>

Pseudo-random functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#prf GoogleComputeVpnTunnel#prf}

---

### GoogleComputeVpnTunnelCipherSuitePhase2 <a name="GoogleComputeVpnTunnelCipherSuitePhase2" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_vpn_tunnel.GoogleComputeVpnTunnelCipherSuitePhase2;

GoogleComputeVpnTunnelCipherSuitePhase2.builder()
//  .encryption(java.util.List<java.lang.String>)
//  .integrity(java.util.List<java.lang.String>)
//  .pfs(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2.property.encryption">encryption</a></code> | <code>java.util.List<java.lang.String></code> | Encryption algorithms. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2.property.integrity">integrity</a></code> | <code>java.util.List<java.lang.String></code> | Integrity algorithms. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2.property.pfs">pfs</a></code> | <code>java.util.List<java.lang.String></code> | Perfect forward secrecy groups. |

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2.property.encryption"></a>

```java
public java.util.List<java.lang.String> getEncryption();
```

- *Type:* java.util.List<java.lang.String>

Encryption algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#encryption GoogleComputeVpnTunnel#encryption}

---

##### `integrity`<sup>Optional</sup> <a name="integrity" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2.property.integrity"></a>

```java
public java.util.List<java.lang.String> getIntegrity();
```

- *Type:* java.util.List<java.lang.String>

Integrity algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#integrity GoogleComputeVpnTunnel#integrity}

---

##### `pfs`<sup>Optional</sup> <a name="pfs" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2.property.pfs"></a>

```java
public java.util.List<java.lang.String> getPfs();
```

- *Type:* java.util.List<java.lang.String>

Perfect forward secrecy groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#pfs GoogleComputeVpnTunnel#pfs}

---

### GoogleComputeVpnTunnelConfig <a name="GoogleComputeVpnTunnelConfig" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_vpn_tunnel.GoogleComputeVpnTunnelConfig;

GoogleComputeVpnTunnelConfig.builder()
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
    .name(java.lang.String)
    .sharedSecret(java.lang.String)
//  .cipherSuite(GoogleComputeVpnTunnelCipherSuite)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ikeVersion(java.lang.Number)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .localTrafficSelector(java.util.List<java.lang.String>)
//  .peerExternalGateway(java.lang.String)
//  .peerExternalGatewayInterface(java.lang.Number)
//  .peerGcpGateway(java.lang.String)
//  .peerIp(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .remoteTrafficSelector(java.util.List<java.lang.String>)
//  .router(java.lang.String)
//  .targetVpnGateway(java.lang.String)
//  .timeouts(GoogleComputeVpnTunnelTimeouts)
//  .vpnGateway(java.lang.String)
//  .vpnGatewayInterface(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.sharedSecret">sharedSecret</a></code> | <code>java.lang.String</code> | Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.cipherSuite">cipherSuite</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite">GoogleComputeVpnTunnelCipherSuite</a></code> | cipher_suite block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#id GoogleComputeVpnTunnel#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.ikeVersion">ikeVersion</a></code> | <code>java.lang.Number</code> | IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to apply to this VpnTunnel. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.localTrafficSelector">localTrafficSelector</a></code> | <code>java.util.List<java.lang.String></code> | Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.peerExternalGateway">peerExternalGateway</a></code> | <code>java.lang.String</code> | URL of the peer side external VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.peerExternalGatewayInterface">peerExternalGatewayInterface</a></code> | <code>java.lang.Number</code> | The interface ID of the external VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.peerGcpGateway">peerGcpGateway</a></code> | <code>java.lang.String</code> | URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.peerIp">peerIp</a></code> | <code>java.lang.String</code> | IP address of the peer VPN gateway. Only IPv4 is supported. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#project GoogleComputeVpnTunnel#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.remoteTrafficSelector">remoteTrafficSelector</a></code> | <code>java.util.List<java.lang.String></code> | Remote traffic selector to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.router">router</a></code> | <code>java.lang.String</code> | URL of router resource to be used for dynamic routing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.targetVpnGateway">targetVpnGateway</a></code> | <code>java.lang.String</code> | URL of the Target VPN gateway with which this VPN tunnel is associated. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts">GoogleComputeVpnTunnelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.vpnGateway">vpnGateway</a></code> | <code>java.lang.String</code> | URL of the VPN gateway with which this VPN tunnel is associated. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.vpnGatewayInterface">vpnGatewayInterface</a></code> | <code>java.lang.Number</code> | The interface ID of the VPN gateway with which this VPN tunnel is associated. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63
characters long and match the regular expression
'[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first character
must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#name GoogleComputeVpnTunnel#name}

---

##### `sharedSecret`<sup>Required</sup> <a name="sharedSecret" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.sharedSecret"></a>

```java
public java.lang.String getSharedSecret();
```

- *Type:* java.lang.String

Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#shared_secret GoogleComputeVpnTunnel#shared_secret}

---

##### `cipherSuite`<sup>Optional</sup> <a name="cipherSuite" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.cipherSuite"></a>

```java
public GoogleComputeVpnTunnelCipherSuite getCipherSuite();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite">GoogleComputeVpnTunnelCipherSuite</a>

cipher_suite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#cipher_suite GoogleComputeVpnTunnel#cipher_suite}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#description GoogleComputeVpnTunnel#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#id GoogleComputeVpnTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ikeVersion`<sup>Optional</sup> <a name="ikeVersion" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.ikeVersion"></a>

```java
public java.lang.Number getIkeVersion();
```

- *Type:* java.lang.Number

IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway.

Acceptable IKE versions are 1 or 2. Default version is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#ike_version GoogleComputeVpnTunnel#ike_version}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels to apply to this VpnTunnel.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#labels GoogleComputeVpnTunnel#labels}

---

##### `localTrafficSelector`<sup>Optional</sup> <a name="localTrafficSelector" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.localTrafficSelector"></a>

```java
public java.util.List<java.lang.String> getLocalTrafficSelector();
```

- *Type:* java.util.List<java.lang.String>

Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway.

The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#local_traffic_selector GoogleComputeVpnTunnel#local_traffic_selector}

---

##### `peerExternalGateway`<sup>Optional</sup> <a name="peerExternalGateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.peerExternalGateway"></a>

```java
public java.lang.String getPeerExternalGateway();
```

- *Type:* java.lang.String

URL of the peer side external VPN gateway to which this VPN tunnel is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#peer_external_gateway GoogleComputeVpnTunnel#peer_external_gateway}

---

##### `peerExternalGatewayInterface`<sup>Optional</sup> <a name="peerExternalGatewayInterface" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.peerExternalGatewayInterface"></a>

```java
public java.lang.Number getPeerExternalGatewayInterface();
```

- *Type:* java.lang.Number

The interface ID of the external VPN gateway to which this VPN tunnel is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#peer_external_gateway_interface GoogleComputeVpnTunnel#peer_external_gateway_interface}

---

##### `peerGcpGateway`<sup>Optional</sup> <a name="peerGcpGateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.peerGcpGateway"></a>

```java
public java.lang.String getPeerGcpGateway();
```

- *Type:* java.lang.String

URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected.

If provided, the VPN tunnel will automatically use the same vpn_gateway_interface
ID in the peer GCP VPN gateway.
This field must reference a 'google_compute_ha_vpn_gateway' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#peer_gcp_gateway GoogleComputeVpnTunnel#peer_gcp_gateway}

---

##### `peerIp`<sup>Optional</sup> <a name="peerIp" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.peerIp"></a>

```java
public java.lang.String getPeerIp();
```

- *Type:* java.lang.String

IP address of the peer VPN gateway. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#peer_ip GoogleComputeVpnTunnel#peer_ip}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#project GoogleComputeVpnTunnel#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#region GoogleComputeVpnTunnel#region}

---

##### `remoteTrafficSelector`<sup>Optional</sup> <a name="remoteTrafficSelector" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.remoteTrafficSelector"></a>

```java
public java.util.List<java.lang.String> getRemoteTrafficSelector();
```

- *Type:* java.util.List<java.lang.String>

Remote traffic selector to use when establishing the VPN tunnel with peer VPN gateway.

The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#remote_traffic_selector GoogleComputeVpnTunnel#remote_traffic_selector}

---

##### `router`<sup>Optional</sup> <a name="router" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.router"></a>

```java
public java.lang.String getRouter();
```

- *Type:* java.lang.String

URL of router resource to be used for dynamic routing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#router GoogleComputeVpnTunnel#router}

---

##### `targetVpnGateway`<sup>Optional</sup> <a name="targetVpnGateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.targetVpnGateway"></a>

```java
public java.lang.String getTargetVpnGateway();
```

- *Type:* java.lang.String

URL of the Target VPN gateway with which this VPN tunnel is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#target_vpn_gateway GoogleComputeVpnTunnel#target_vpn_gateway}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.timeouts"></a>

```java
public GoogleComputeVpnTunnelTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts">GoogleComputeVpnTunnelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#timeouts GoogleComputeVpnTunnel#timeouts}

---

##### `vpnGateway`<sup>Optional</sup> <a name="vpnGateway" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.vpnGateway"></a>

```java
public java.lang.String getVpnGateway();
```

- *Type:* java.lang.String

URL of the VPN gateway with which this VPN tunnel is associated.

This must be used if a High Availability VPN gateway resource is created.
This field must reference a 'google_compute_ha_vpn_gateway' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#vpn_gateway GoogleComputeVpnTunnel#vpn_gateway}

---

##### `vpnGatewayInterface`<sup>Optional</sup> <a name="vpnGatewayInterface" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.vpnGatewayInterface"></a>

```java
public java.lang.Number getVpnGatewayInterface();
```

- *Type:* java.lang.Number

The interface ID of the VPN gateway with which this VPN tunnel is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#vpn_gateway_interface GoogleComputeVpnTunnel#vpn_gateway_interface}

---

### GoogleComputeVpnTunnelTimeouts <a name="GoogleComputeVpnTunnelTimeouts" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_vpn_tunnel.GoogleComputeVpnTunnelTimeouts;

GoogleComputeVpnTunnelTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#create GoogleComputeVpnTunnel#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#delete GoogleComputeVpnTunnel#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#update GoogleComputeVpnTunnel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#create GoogleComputeVpnTunnel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#delete GoogleComputeVpnTunnel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_vpn_tunnel#update GoogleComputeVpnTunnel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeVpnTunnelCipherSuiteOutputReference <a name="GoogleComputeVpnTunnelCipherSuiteOutputReference" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_vpn_tunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference;

new GoogleComputeVpnTunnelCipherSuiteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.putPhase1">putPhase1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.putPhase2">putPhase2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.resetPhase1">resetPhase1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.resetPhase2">resetPhase2</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPhase1` <a name="putPhase1" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.putPhase1"></a>

```java
public void putPhase1(GoogleComputeVpnTunnelCipherSuitePhase1 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.putPhase1.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1">GoogleComputeVpnTunnelCipherSuitePhase1</a>

---

##### `putPhase2` <a name="putPhase2" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.putPhase2"></a>

```java
public void putPhase2(GoogleComputeVpnTunnelCipherSuitePhase2 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.putPhase2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2">GoogleComputeVpnTunnelCipherSuitePhase2</a>

---

##### `resetPhase1` <a name="resetPhase1" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.resetPhase1"></a>

```java
public void resetPhase1()
```

##### `resetPhase2` <a name="resetPhase2" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.resetPhase2"></a>

```java
public void resetPhase2()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.phase1">phase1</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference">GoogleComputeVpnTunnelCipherSuitePhase1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.phase2">phase2</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference">GoogleComputeVpnTunnelCipherSuitePhase2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.phase1Input">phase1Input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1">GoogleComputeVpnTunnelCipherSuitePhase1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.phase2Input">phase2Input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2">GoogleComputeVpnTunnelCipherSuitePhase2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite">GoogleComputeVpnTunnelCipherSuite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `phase1`<sup>Required</sup> <a name="phase1" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.phase1"></a>

```java
public GoogleComputeVpnTunnelCipherSuitePhase1OutputReference getPhase1();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference">GoogleComputeVpnTunnelCipherSuitePhase1OutputReference</a>

---

##### `phase2`<sup>Required</sup> <a name="phase2" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.phase2"></a>

```java
public GoogleComputeVpnTunnelCipherSuitePhase2OutputReference getPhase2();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference">GoogleComputeVpnTunnelCipherSuitePhase2OutputReference</a>

---

##### `phase1Input`<sup>Optional</sup> <a name="phase1Input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.phase1Input"></a>

```java
public GoogleComputeVpnTunnelCipherSuitePhase1 getPhase1Input();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1">GoogleComputeVpnTunnelCipherSuitePhase1</a>

---

##### `phase2Input`<sup>Optional</sup> <a name="phase2Input" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.phase2Input"></a>

```java
public GoogleComputeVpnTunnelCipherSuitePhase2 getPhase2Input();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2">GoogleComputeVpnTunnelCipherSuitePhase2</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.internalValue"></a>

```java
public GoogleComputeVpnTunnelCipherSuite getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite">GoogleComputeVpnTunnelCipherSuite</a>

---


### GoogleComputeVpnTunnelCipherSuitePhase1OutputReference <a name="GoogleComputeVpnTunnelCipherSuitePhase1OutputReference" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_vpn_tunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference;

new GoogleComputeVpnTunnelCipherSuitePhase1OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resetDh">resetDh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resetIntegrity">resetIntegrity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resetPrf">resetPrf</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDh` <a name="resetDh" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resetDh"></a>

```java
public void resetDh()
```

##### `resetEncryption` <a name="resetEncryption" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resetEncryption"></a>

```java
public void resetEncryption()
```

##### `resetIntegrity` <a name="resetIntegrity" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resetIntegrity"></a>

```java
public void resetIntegrity()
```

##### `resetPrf` <a name="resetPrf" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resetPrf"></a>

```java
public void resetPrf()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.dhInput">dhInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.encryptionInput">encryptionInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.integrityInput">integrityInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.prfInput">prfInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.dh">dh</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.encryption">encryption</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.integrity">integrity</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.prf">prf</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1">GoogleComputeVpnTunnelCipherSuitePhase1</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dhInput`<sup>Optional</sup> <a name="dhInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.dhInput"></a>

```java
public java.util.List<java.lang.String> getDhInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.encryptionInput"></a>

```java
public java.util.List<java.lang.String> getEncryptionInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `integrityInput`<sup>Optional</sup> <a name="integrityInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.integrityInput"></a>

```java
public java.util.List<java.lang.String> getIntegrityInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `prfInput`<sup>Optional</sup> <a name="prfInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.prfInput"></a>

```java
public java.util.List<java.lang.String> getPrfInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dh`<sup>Required</sup> <a name="dh" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.dh"></a>

```java
public java.util.List<java.lang.String> getDh();
```

- *Type:* java.util.List<java.lang.String>

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.encryption"></a>

```java
public java.util.List<java.lang.String> getEncryption();
```

- *Type:* java.util.List<java.lang.String>

---

##### `integrity`<sup>Required</sup> <a name="integrity" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.integrity"></a>

```java
public java.util.List<java.lang.String> getIntegrity();
```

- *Type:* java.util.List<java.lang.String>

---

##### `prf`<sup>Required</sup> <a name="prf" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.prf"></a>

```java
public java.util.List<java.lang.String> getPrf();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.internalValue"></a>

```java
public GoogleComputeVpnTunnelCipherSuitePhase1 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1">GoogleComputeVpnTunnelCipherSuitePhase1</a>

---


### GoogleComputeVpnTunnelCipherSuitePhase2OutputReference <a name="GoogleComputeVpnTunnelCipherSuitePhase2OutputReference" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_vpn_tunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference;

new GoogleComputeVpnTunnelCipherSuitePhase2OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.resetIntegrity">resetIntegrity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.resetPfs">resetPfs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryption` <a name="resetEncryption" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.resetEncryption"></a>

```java
public void resetEncryption()
```

##### `resetIntegrity` <a name="resetIntegrity" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.resetIntegrity"></a>

```java
public void resetIntegrity()
```

##### `resetPfs` <a name="resetPfs" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.resetPfs"></a>

```java
public void resetPfs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.encryptionInput">encryptionInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.integrityInput">integrityInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.pfsInput">pfsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.encryption">encryption</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.integrity">integrity</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.pfs">pfs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2">GoogleComputeVpnTunnelCipherSuitePhase2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.encryptionInput"></a>

```java
public java.util.List<java.lang.String> getEncryptionInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `integrityInput`<sup>Optional</sup> <a name="integrityInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.integrityInput"></a>

```java
public java.util.List<java.lang.String> getIntegrityInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pfsInput`<sup>Optional</sup> <a name="pfsInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.pfsInput"></a>

```java
public java.util.List<java.lang.String> getPfsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.encryption"></a>

```java
public java.util.List<java.lang.String> getEncryption();
```

- *Type:* java.util.List<java.lang.String>

---

##### `integrity`<sup>Required</sup> <a name="integrity" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.integrity"></a>

```java
public java.util.List<java.lang.String> getIntegrity();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pfs`<sup>Required</sup> <a name="pfs" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.pfs"></a>

```java
public java.util.List<java.lang.String> getPfs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.internalValue"></a>

```java
public GoogleComputeVpnTunnelCipherSuitePhase2 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2">GoogleComputeVpnTunnelCipherSuitePhase2</a>

---


### GoogleComputeVpnTunnelTimeoutsOutputReference <a name="GoogleComputeVpnTunnelTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_vpn_tunnel.GoogleComputeVpnTunnelTimeoutsOutputReference;

new GoogleComputeVpnTunnelTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts">GoogleComputeVpnTunnelTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts">GoogleComputeVpnTunnelTimeouts</a>

---



