# `googleEdgecontainerVpnConnection` Submodule <a name="`googleEdgecontainerVpnConnection` Submodule" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleEdgecontainerVpnConnection <a name="GoogleEdgecontainerVpnConnection" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection google_edgecontainer_vpn_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_edgecontainer_vpn_connection.GoogleEdgecontainerVpnConnection;

GoogleEdgecontainerVpnConnection.Builder.create(Construct scope, java.lang.String id)
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
    .cluster(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
//  .enableHighAvailability(java.lang.Boolean)
//  .enableHighAvailability(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .natGatewayIp(java.lang.String)
//  .project(java.lang.String)
//  .router(java.lang.String)
//  .timeouts(GoogleEdgecontainerVpnConnectionTimeouts)
//  .vpc(java.lang.String)
//  .vpcProject(GoogleEdgecontainerVpnConnectionVpcProject)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.cluster">cluster</a></code> | <code>java.lang.String</code> | The canonical Cluster name to connect to. It is in the form of projects/{project}/locations/{location}/clusters/{cluster}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Google Cloud Platform location. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource name of VPN connection. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.enableHighAvailability">enableHighAvailability</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this VPN connection has HA enabled on cluster side. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#id GoogleEdgecontainerVpnConnection#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels associated with this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.natGatewayIp">natGatewayIp</a></code> | <code>java.lang.String</code> | NAT gateway IP, or WAN IP address. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#project GoogleEdgecontainerVpnConnection#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.router">router</a></code> | <code>java.lang.String</code> | The VPN connection Cloud Router name. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts">GoogleEdgecontainerVpnConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.vpc">vpc</a></code> | <code>java.lang.String</code> | The network ID of VPC to connect to. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.vpcProject">vpcProject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject">GoogleEdgecontainerVpnConnectionVpcProject</a></code> | vpc_project block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.cluster"></a>

- *Type:* java.lang.String

The canonical Cluster name to connect to. It is in the form of projects/{project}/locations/{location}/clusters/{cluster}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#cluster GoogleEdgecontainerVpnConnection#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Google Cloud Platform location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#location GoogleEdgecontainerVpnConnection#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource name of VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#name GoogleEdgecontainerVpnConnection#name}

---

##### `enableHighAvailability`<sup>Optional</sup> <a name="enableHighAvailability" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.enableHighAvailability"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this VPN connection has HA enabled on cluster side.

If enabled, when creating VPN connection we will attempt to use 2 ANG floating IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#enable_high_availability GoogleEdgecontainerVpnConnection#enable_high_availability}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#id GoogleEdgecontainerVpnConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels associated with this resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#labels GoogleEdgecontainerVpnConnection#labels}

---

##### `natGatewayIp`<sup>Optional</sup> <a name="natGatewayIp" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.natGatewayIp"></a>

- *Type:* java.lang.String

NAT gateway IP, or WAN IP address.

If a customer has multiple NAT IPs, the customer needs to configure NAT such that only one external IP maps to the GMEC Anthos cluster.
This is empty if NAT is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#nat_gateway_ip GoogleEdgecontainerVpnConnection#nat_gateway_ip}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#project GoogleEdgecontainerVpnConnection#project}.

---

##### `router`<sup>Optional</sup> <a name="router" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.router"></a>

- *Type:* java.lang.String

The VPN connection Cloud Router name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#router GoogleEdgecontainerVpnConnection#router}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts">GoogleEdgecontainerVpnConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#timeouts GoogleEdgecontainerVpnConnection#timeouts}

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.vpc"></a>

- *Type:* java.lang.String

The network ID of VPC to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#vpc GoogleEdgecontainerVpnConnection#vpc}

---

##### `vpcProject`<sup>Optional</sup> <a name="vpcProject" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.vpcProject"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject">GoogleEdgecontainerVpnConnectionVpcProject</a>

vpc_project block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#vpc_project GoogleEdgecontainerVpnConnection#vpc_project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.putVpcProject">putVpcProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetEnableHighAvailability">resetEnableHighAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetNatGatewayIp">resetNatGatewayIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetRouter">resetRouter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetVpc">resetVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetVpcProject">resetVpcProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.putTimeouts"></a>

```java
public void putTimeouts(GoogleEdgecontainerVpnConnectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts">GoogleEdgecontainerVpnConnectionTimeouts</a>

---

##### `putVpcProject` <a name="putVpcProject" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.putVpcProject"></a>

```java
public void putVpcProject(GoogleEdgecontainerVpnConnectionVpcProject value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.putVpcProject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject">GoogleEdgecontainerVpnConnectionVpcProject</a>

---

##### `resetEnableHighAvailability` <a name="resetEnableHighAvailability" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetEnableHighAvailability"></a>

```java
public void resetEnableHighAvailability()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetNatGatewayIp` <a name="resetNatGatewayIp" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetNatGatewayIp"></a>

```java
public void resetNatGatewayIp()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetProject"></a>

```java
public void resetProject()
```

##### `resetRouter` <a name="resetRouter" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetRouter"></a>

```java
public void resetRouter()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVpc` <a name="resetVpc" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetVpc"></a>

```java
public void resetVpc()
```

##### `resetVpcProject` <a name="resetVpcProject" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetVpcProject"></a>

```java
public void resetVpcProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleEdgecontainerVpnConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_edgecontainer_vpn_connection.GoogleEdgecontainerVpnConnection;

GoogleEdgecontainerVpnConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_edgecontainer_vpn_connection.GoogleEdgecontainerVpnConnection;

GoogleEdgecontainerVpnConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_edgecontainer_vpn_connection.GoogleEdgecontainerVpnConnection;

GoogleEdgecontainerVpnConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_edgecontainer_vpn_connection.GoogleEdgecontainerVpnConnection;

GoogleEdgecontainerVpnConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleEdgecontainerVpnConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleEdgecontainerVpnConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleEdgecontainerVpnConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleEdgecontainerVpnConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleEdgecontainerVpnConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.details">details</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList">GoogleEdgecontainerVpnConnectionDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference">GoogleEdgecontainerVpnConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.vpcProject">vpcProject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference">GoogleEdgecontainerVpnConnectionVpcProjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.enableHighAvailabilityInput">enableHighAvailabilityInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.natGatewayIpInput">natGatewayIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.routerInput">routerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts">GoogleEdgecontainerVpnConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.vpcInput">vpcInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.vpcProjectInput">vpcProjectInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject">GoogleEdgecontainerVpnConnectionVpcProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.enableHighAvailability">enableHighAvailability</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.natGatewayIp">natGatewayIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.router">router</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.vpc">vpc</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.details"></a>

```java
public GoogleEdgecontainerVpnConnectionDetailsList getDetails();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList">GoogleEdgecontainerVpnConnectionDetailsList</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.timeouts"></a>

```java
public GoogleEdgecontainerVpnConnectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference">GoogleEdgecontainerVpnConnectionTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `vpcProject`<sup>Required</sup> <a name="vpcProject" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.vpcProject"></a>

```java
public GoogleEdgecontainerVpnConnectionVpcProjectOutputReference getVpcProject();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference">GoogleEdgecontainerVpnConnectionVpcProjectOutputReference</a>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `enableHighAvailabilityInput`<sup>Optional</sup> <a name="enableHighAvailabilityInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.enableHighAvailabilityInput"></a>

```java
public java.lang.Object getEnableHighAvailabilityInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `natGatewayIpInput`<sup>Optional</sup> <a name="natGatewayIpInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.natGatewayIpInput"></a>

```java
public java.lang.String getNatGatewayIpInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `routerInput`<sup>Optional</sup> <a name="routerInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.routerInput"></a>

```java
public java.lang.String getRouterInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts">GoogleEdgecontainerVpnConnectionTimeouts</a>

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.vpcInput"></a>

```java
public java.lang.String getVpcInput();
```

- *Type:* java.lang.String

---

##### `vpcProjectInput`<sup>Optional</sup> <a name="vpcProjectInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.vpcProjectInput"></a>

```java
public GoogleEdgecontainerVpnConnectionVpcProject getVpcProjectInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject">GoogleEdgecontainerVpnConnectionVpcProject</a>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `enableHighAvailability`<sup>Required</sup> <a name="enableHighAvailability" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.enableHighAvailability"></a>

```java
public java.lang.Object getEnableHighAvailability();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `natGatewayIp`<sup>Required</sup> <a name="natGatewayIp" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.natGatewayIp"></a>

```java
public java.lang.String getNatGatewayIp();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.router"></a>

```java
public java.lang.String getRouter();
```

- *Type:* java.lang.String

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.vpc"></a>

```java
public java.lang.String getVpc();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleEdgecontainerVpnConnectionConfig <a name="GoogleEdgecontainerVpnConnectionConfig" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_edgecontainer_vpn_connection.GoogleEdgecontainerVpnConnectionConfig;

GoogleEdgecontainerVpnConnectionConfig.builder()
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
    .cluster(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
//  .enableHighAvailability(java.lang.Boolean)
//  .enableHighAvailability(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .natGatewayIp(java.lang.String)
//  .project(java.lang.String)
//  .router(java.lang.String)
//  .timeouts(GoogleEdgecontainerVpnConnectionTimeouts)
//  .vpc(java.lang.String)
//  .vpcProject(GoogleEdgecontainerVpnConnectionVpcProject)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.cluster">cluster</a></code> | <code>java.lang.String</code> | The canonical Cluster name to connect to. It is in the form of projects/{project}/locations/{location}/clusters/{cluster}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.location">location</a></code> | <code>java.lang.String</code> | Google Cloud Platform location. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource name of VPN connection. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.enableHighAvailability">enableHighAvailability</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this VPN connection has HA enabled on cluster side. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#id GoogleEdgecontainerVpnConnection#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels associated with this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.natGatewayIp">natGatewayIp</a></code> | <code>java.lang.String</code> | NAT gateway IP, or WAN IP address. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#project GoogleEdgecontainerVpnConnection#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.router">router</a></code> | <code>java.lang.String</code> | The VPN connection Cloud Router name. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts">GoogleEdgecontainerVpnConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.vpc">vpc</a></code> | <code>java.lang.String</code> | The network ID of VPC to connect to. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.vpcProject">vpcProject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject">GoogleEdgecontainerVpnConnectionVpcProject</a></code> | vpc_project block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

The canonical Cluster name to connect to. It is in the form of projects/{project}/locations/{location}/clusters/{cluster}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#cluster GoogleEdgecontainerVpnConnection#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Google Cloud Platform location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#location GoogleEdgecontainerVpnConnection#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name of VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#name GoogleEdgecontainerVpnConnection#name}

---

##### `enableHighAvailability`<sup>Optional</sup> <a name="enableHighAvailability" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.enableHighAvailability"></a>

```java
public java.lang.Object getEnableHighAvailability();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this VPN connection has HA enabled on cluster side.

If enabled, when creating VPN connection we will attempt to use 2 ANG floating IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#enable_high_availability GoogleEdgecontainerVpnConnection#enable_high_availability}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#id GoogleEdgecontainerVpnConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels associated with this resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#labels GoogleEdgecontainerVpnConnection#labels}

---

##### `natGatewayIp`<sup>Optional</sup> <a name="natGatewayIp" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.natGatewayIp"></a>

```java
public java.lang.String getNatGatewayIp();
```

- *Type:* java.lang.String

NAT gateway IP, or WAN IP address.

If a customer has multiple NAT IPs, the customer needs to configure NAT such that only one external IP maps to the GMEC Anthos cluster.
This is empty if NAT is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#nat_gateway_ip GoogleEdgecontainerVpnConnection#nat_gateway_ip}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#project GoogleEdgecontainerVpnConnection#project}.

---

##### `router`<sup>Optional</sup> <a name="router" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.router"></a>

```java
public java.lang.String getRouter();
```

- *Type:* java.lang.String

The VPN connection Cloud Router name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#router GoogleEdgecontainerVpnConnection#router}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.timeouts"></a>

```java
public GoogleEdgecontainerVpnConnectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts">GoogleEdgecontainerVpnConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#timeouts GoogleEdgecontainerVpnConnection#timeouts}

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.vpc"></a>

```java
public java.lang.String getVpc();
```

- *Type:* java.lang.String

The network ID of VPC to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#vpc GoogleEdgecontainerVpnConnection#vpc}

---

##### `vpcProject`<sup>Optional</sup> <a name="vpcProject" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.vpcProject"></a>

```java
public GoogleEdgecontainerVpnConnectionVpcProject getVpcProject();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject">GoogleEdgecontainerVpnConnectionVpcProject</a>

vpc_project block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#vpc_project GoogleEdgecontainerVpnConnection#vpc_project}

---

### GoogleEdgecontainerVpnConnectionDetails <a name="GoogleEdgecontainerVpnConnectionDetails" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_edgecontainer_vpn_connection.GoogleEdgecontainerVpnConnectionDetails;

GoogleEdgecontainerVpnConnectionDetails.builder()
    .build();
```


### GoogleEdgecontainerVpnConnectionDetailsCloudRouter <a name="GoogleEdgecontainerVpnConnectionDetailsCloudRouter" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_edgecontainer_vpn_connection.GoogleEdgecontainerVpnConnectionDetailsCloudRouter;

GoogleEdgecontainerVpnConnectionDetailsCloudRouter.builder()
    .build();
```


### GoogleEdgecontainerVpnConnectionDetailsCloudVpns <a name="GoogleEdgecontainerVpnConnectionDetailsCloudVpns" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_edgecontainer_vpn_connection.GoogleEdgecontainerVpnConnectionDetailsCloudVpns;

GoogleEdgecontainerVpnConnectionDetailsCloudVpns.builder()
    .build();
```


### GoogleEdgecontainerVpnConnectionTimeouts <a name="GoogleEdgecontainerVpnConnectionTimeouts" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_edgecontainer_vpn_connection.GoogleEdgecontainerVpnConnectionTimeouts;

GoogleEdgecontainerVpnConnectionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#create GoogleEdgecontainerVpnConnection#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#delete GoogleEdgecontainerVpnConnection#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#update GoogleEdgecontainerVpnConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#create GoogleEdgecontainerVpnConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#delete GoogleEdgecontainerVpnConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#update GoogleEdgecontainerVpnConnection#update}.

---

### GoogleEdgecontainerVpnConnectionVpcProject <a name="GoogleEdgecontainerVpnConnectionVpcProject" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_edgecontainer_vpn_connection.GoogleEdgecontainerVpnConnectionVpcProject;

GoogleEdgecontainerVpnConnectionVpcProject.builder()
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The project of the VPC to connect to. If not specified, it is the same as the cluster project. |

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The project of the VPC to connect to. If not specified, it is the same as the cluster project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_edgecontainer_vpn_connection#project_id GoogleEdgecontainerVpnConnection#project_id}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleEdgecontainerVpnConnectionDetailsCloudRouterList <a name="GoogleEdgecontainerVpnConnectionDetailsCloudRouterList" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_edgecontainer_vpn_connection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList;

new GoogleEdgecontainerVpnConnectionDetailsCloudRouterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.get"></a>

```java
public GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference <a name="GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_edgecontainer_vpn_connection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference;

new GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouter">GoogleEdgecontainerVpnConnectionDetailsCloudRouter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.internalValue"></a>

```java
public GoogleEdgecontainerVpnConnectionDetailsCloudRouter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouter">GoogleEdgecontainerVpnConnectionDetailsCloudRouter</a>

---


### GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList <a name="GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_edgecontainer_vpn_connection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList;

new GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.get"></a>

```java
public GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference <a name="GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_edgecontainer_vpn_connection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference;

new GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.gateway">gateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpns">GoogleEdgecontainerVpnConnectionDetailsCloudVpns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.gateway"></a>

```java
public java.lang.String getGateway();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.internalValue"></a>

```java
public GoogleEdgecontainerVpnConnectionDetailsCloudVpns getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpns">GoogleEdgecontainerVpnConnectionDetailsCloudVpns</a>

---


### GoogleEdgecontainerVpnConnectionDetailsList <a name="GoogleEdgecontainerVpnConnectionDetailsList" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_edgecontainer_vpn_connection.GoogleEdgecontainerVpnConnectionDetailsList;

new GoogleEdgecontainerVpnConnectionDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.get"></a>

```java
public GoogleEdgecontainerVpnConnectionDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleEdgecontainerVpnConnectionDetailsOutputReference <a name="GoogleEdgecontainerVpnConnectionDetailsOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_edgecontainer_vpn_connection.GoogleEdgecontainerVpnConnectionDetailsOutputReference;

new GoogleEdgecontainerVpnConnectionDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.cloudRouter">cloudRouter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList">GoogleEdgecontainerVpnConnectionDetailsCloudRouterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.cloudVpns">cloudVpns</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList">GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.error">error</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetails">GoogleEdgecontainerVpnConnectionDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudRouter`<sup>Required</sup> <a name="cloudRouter" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.cloudRouter"></a>

```java
public GoogleEdgecontainerVpnConnectionDetailsCloudRouterList getCloudRouter();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList">GoogleEdgecontainerVpnConnectionDetailsCloudRouterList</a>

---

##### `cloudVpns`<sup>Required</sup> <a name="cloudVpns" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.cloudVpns"></a>

```java
public GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList getCloudVpns();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList">GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList</a>

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.error"></a>

```java
public java.lang.String getError();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.internalValue"></a>

```java
public GoogleEdgecontainerVpnConnectionDetails getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetails">GoogleEdgecontainerVpnConnectionDetails</a>

---


### GoogleEdgecontainerVpnConnectionTimeoutsOutputReference <a name="GoogleEdgecontainerVpnConnectionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_edgecontainer_vpn_connection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference;

new GoogleEdgecontainerVpnConnectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts">GoogleEdgecontainerVpnConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts">GoogleEdgecontainerVpnConnectionTimeouts</a>

---


### GoogleEdgecontainerVpnConnectionVpcProjectOutputReference <a name="GoogleEdgecontainerVpnConnectionVpcProjectOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_edgecontainer_vpn_connection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference;

new GoogleEdgecontainerVpnConnectionVpcProjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject">GoogleEdgecontainerVpnConnectionVpcProject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.property.internalValue"></a>

```java
public GoogleEdgecontainerVpnConnectionVpcProject getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject">GoogleEdgecontainerVpnConnectionVpcProject</a>

---



