# `googleComputeHaVpnGateway` Submodule <a name="`googleComputeHaVpnGateway` Submodule" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeHaVpnGateway <a name="GoogleComputeHaVpnGateway" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_ha_vpn_gateway google_compute_ha_vpn_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_ha_vpn_gateway.GoogleComputeHaVpnGateway;

GoogleComputeHaVpnGateway.Builder.create(Construct scope, java.lang.String id)
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
    .network(java.lang.String)
//  .description(java.lang.String)
//  .gatewayIpVersion(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .stackType(java.lang.String)
//  .timeouts(GoogleComputeHaVpnGatewayTimeouts)
//  .vpnInterfaces(IResolvable)
//  .vpnInterfaces(java.util.List<GoogleComputeHaVpnGatewayVpnInterfaces>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The network this VPN gateway is accepting traffic for. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.gatewayIpVersion">gatewayIpVersion</a></code> | <code>java.lang.String</code> | The IP family of the gateway IPs for the HA-VPN gateway interfaces. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_ha_vpn_gateway#id GoogleComputeHaVpnGateway#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_ha_vpn_gateway#project GoogleComputeHaVpnGateway#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region this gateway should sit in. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.stackType">stackType</a></code> | <code>java.lang.String</code> | The stack type for this VPN gateway to identify the IP protocols that are enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeouts">GoogleComputeHaVpnGatewayTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.vpnInterfaces">vpnInterfaces</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfaces">GoogleComputeHaVpnGatewayVpnInterfaces</a>></code> | vpn_interfaces block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_ha_vpn_gateway#name GoogleComputeHaVpnGateway#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The network this VPN gateway is accepting traffic for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_ha_vpn_gateway#network GoogleComputeHaVpnGateway#network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_ha_vpn_gateway#description GoogleComputeHaVpnGateway#description}

---

##### `gatewayIpVersion`<sup>Optional</sup> <a name="gatewayIpVersion" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.gatewayIpVersion"></a>

- *Type:* java.lang.String

The IP family of the gateway IPs for the HA-VPN gateway interfaces.

If not specified, IPV4 will be used. Default value: "IPV4" Possible values: ["IPV4", "IPV6"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_ha_vpn_gateway#gateway_ip_version GoogleComputeHaVpnGateway#gateway_ip_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_ha_vpn_gateway#id GoogleComputeHaVpnGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_ha_vpn_gateway#project GoogleComputeHaVpnGateway#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region this gateway should sit in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_ha_vpn_gateway#region GoogleComputeHaVpnGateway#region}

---

##### `stackType`<sup>Optional</sup> <a name="stackType" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.stackType"></a>

- *Type:* java.lang.String

The stack type for this VPN gateway to identify the IP protocols that are enabled.

If not specified, IPV4_ONLY will be used. Default value: "IPV4_ONLY" Possible values: ["IPV4_ONLY", "IPV4_IPV6", "IPV6_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_ha_vpn_gateway#stack_type GoogleComputeHaVpnGateway#stack_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeouts">GoogleComputeHaVpnGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_ha_vpn_gateway#timeouts GoogleComputeHaVpnGateway#timeouts}

---

##### `vpnInterfaces`<sup>Optional</sup> <a name="vpnInterfaces" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.Initializer.parameter.vpnInterfaces"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfaces">GoogleComputeHaVpnGatewayVpnInterfaces</a>>

vpn_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_ha_vpn_gateway#vpn_interfaces GoogleComputeHaVpnGateway#vpn_interfaces}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.putVpnInterfaces">putVpnInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.resetGatewayIpVersion">resetGatewayIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.resetStackType">resetStackType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.resetVpnInterfaces">resetVpnInterfaces</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeHaVpnGatewayTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeouts">GoogleComputeHaVpnGatewayTimeouts</a>

---

##### `putVpnInterfaces` <a name="putVpnInterfaces" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.putVpnInterfaces"></a>

```java
public void putVpnInterfaces(IResolvable OR java.util.List<GoogleComputeHaVpnGatewayVpnInterfaces> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.putVpnInterfaces.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfaces">GoogleComputeHaVpnGatewayVpnInterfaces</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGatewayIpVersion` <a name="resetGatewayIpVersion" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.resetGatewayIpVersion"></a>

```java
public void resetGatewayIpVersion()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetStackType` <a name="resetStackType" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.resetStackType"></a>

```java
public void resetStackType()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVpnInterfaces` <a name="resetVpnInterfaces" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.resetVpnInterfaces"></a>

```java
public void resetVpnInterfaces()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeHaVpnGateway resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_ha_vpn_gateway.GoogleComputeHaVpnGateway;

GoogleComputeHaVpnGateway.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_ha_vpn_gateway.GoogleComputeHaVpnGateway;

GoogleComputeHaVpnGateway.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_ha_vpn_gateway.GoogleComputeHaVpnGateway;

GoogleComputeHaVpnGateway.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_ha_vpn_gateway.GoogleComputeHaVpnGateway;

GoogleComputeHaVpnGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeHaVpnGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleComputeHaVpnGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeHaVpnGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeHaVpnGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_ha_vpn_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeHaVpnGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference">GoogleComputeHaVpnGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.vpnInterfaces">vpnInterfaces</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesList">GoogleComputeHaVpnGatewayVpnInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.gatewayIpVersionInput">gatewayIpVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.stackTypeInput">stackTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeouts">GoogleComputeHaVpnGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.vpnInterfacesInput">vpnInterfacesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfaces">GoogleComputeHaVpnGatewayVpnInterfaces</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.gatewayIpVersion">gatewayIpVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.stackType">stackType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.timeouts"></a>

```java
public GoogleComputeHaVpnGatewayTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference">GoogleComputeHaVpnGatewayTimeoutsOutputReference</a>

---

##### `vpnInterfaces`<sup>Required</sup> <a name="vpnInterfaces" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.vpnInterfaces"></a>

```java
public GoogleComputeHaVpnGatewayVpnInterfacesList getVpnInterfaces();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesList">GoogleComputeHaVpnGatewayVpnInterfacesList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `gatewayIpVersionInput`<sup>Optional</sup> <a name="gatewayIpVersionInput" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.gatewayIpVersionInput"></a>

```java
public java.lang.String getGatewayIpVersionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `stackTypeInput`<sup>Optional</sup> <a name="stackTypeInput" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.stackTypeInput"></a>

```java
public java.lang.String getStackTypeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeouts">GoogleComputeHaVpnGatewayTimeouts</a>

---

##### `vpnInterfacesInput`<sup>Optional</sup> <a name="vpnInterfacesInput" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.vpnInterfacesInput"></a>

```java
public java.lang.Object getVpnInterfacesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfaces">GoogleComputeHaVpnGatewayVpnInterfaces</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `gatewayIpVersion`<sup>Required</sup> <a name="gatewayIpVersion" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.gatewayIpVersion"></a>

```java
public java.lang.String getGatewayIpVersion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `stackType`<sup>Required</sup> <a name="stackType" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.stackType"></a>

```java
public java.lang.String getStackType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGateway.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeHaVpnGatewayConfig <a name="GoogleComputeHaVpnGatewayConfig" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_ha_vpn_gateway.GoogleComputeHaVpnGatewayConfig;

GoogleComputeHaVpnGatewayConfig.builder()
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
    .network(java.lang.String)
//  .description(java.lang.String)
//  .gatewayIpVersion(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .stackType(java.lang.String)
//  .timeouts(GoogleComputeHaVpnGatewayTimeouts)
//  .vpnInterfaces(IResolvable)
//  .vpnInterfaces(java.util.List<GoogleComputeHaVpnGatewayVpnInterfaces>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.network">network</a></code> | <code>java.lang.String</code> | The network this VPN gateway is accepting traffic for. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.gatewayIpVersion">gatewayIpVersion</a></code> | <code>java.lang.String</code> | The IP family of the gateway IPs for the HA-VPN gateway interfaces. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_ha_vpn_gateway#id GoogleComputeHaVpnGateway#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_ha_vpn_gateway#project GoogleComputeHaVpnGateway#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region this gateway should sit in. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.stackType">stackType</a></code> | <code>java.lang.String</code> | The stack type for this VPN gateway to identify the IP protocols that are enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeouts">GoogleComputeHaVpnGatewayTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.vpnInterfaces">vpnInterfaces</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfaces">GoogleComputeHaVpnGatewayVpnInterfaces</a>></code> | vpn_interfaces block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_ha_vpn_gateway#name GoogleComputeHaVpnGateway#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The network this VPN gateway is accepting traffic for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_ha_vpn_gateway#network GoogleComputeHaVpnGateway#network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_ha_vpn_gateway#description GoogleComputeHaVpnGateway#description}

---

##### `gatewayIpVersion`<sup>Optional</sup> <a name="gatewayIpVersion" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.gatewayIpVersion"></a>

```java
public java.lang.String getGatewayIpVersion();
```

- *Type:* java.lang.String

The IP family of the gateway IPs for the HA-VPN gateway interfaces.

If not specified, IPV4 will be used. Default value: "IPV4" Possible values: ["IPV4", "IPV6"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_ha_vpn_gateway#gateway_ip_version GoogleComputeHaVpnGateway#gateway_ip_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_ha_vpn_gateway#id GoogleComputeHaVpnGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_ha_vpn_gateway#project GoogleComputeHaVpnGateway#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region this gateway should sit in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_ha_vpn_gateway#region GoogleComputeHaVpnGateway#region}

---

##### `stackType`<sup>Optional</sup> <a name="stackType" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.stackType"></a>

```java
public java.lang.String getStackType();
```

- *Type:* java.lang.String

The stack type for this VPN gateway to identify the IP protocols that are enabled.

If not specified, IPV4_ONLY will be used. Default value: "IPV4_ONLY" Possible values: ["IPV4_ONLY", "IPV4_IPV6", "IPV6_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_ha_vpn_gateway#stack_type GoogleComputeHaVpnGateway#stack_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.timeouts"></a>

```java
public GoogleComputeHaVpnGatewayTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeouts">GoogleComputeHaVpnGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_ha_vpn_gateway#timeouts GoogleComputeHaVpnGateway#timeouts}

---

##### `vpnInterfaces`<sup>Optional</sup> <a name="vpnInterfaces" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayConfig.property.vpnInterfaces"></a>

```java
public java.lang.Object getVpnInterfaces();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfaces">GoogleComputeHaVpnGatewayVpnInterfaces</a>>

vpn_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_ha_vpn_gateway#vpn_interfaces GoogleComputeHaVpnGateway#vpn_interfaces}

---

### GoogleComputeHaVpnGatewayTimeouts <a name="GoogleComputeHaVpnGatewayTimeouts" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_ha_vpn_gateway.GoogleComputeHaVpnGatewayTimeouts;

GoogleComputeHaVpnGatewayTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_ha_vpn_gateway#create GoogleComputeHaVpnGateway#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_ha_vpn_gateway#delete GoogleComputeHaVpnGateway#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_ha_vpn_gateway#create GoogleComputeHaVpnGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_ha_vpn_gateway#delete GoogleComputeHaVpnGateway#delete}.

---

### GoogleComputeHaVpnGatewayVpnInterfaces <a name="GoogleComputeHaVpnGatewayVpnInterfaces" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfaces.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_ha_vpn_gateway.GoogleComputeHaVpnGatewayVpnInterfaces;

GoogleComputeHaVpnGatewayVpnInterfaces.builder()
//  .id(java.lang.Number)
//  .interconnectAttachment(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfaces.property.id">id</a></code> | <code>java.lang.Number</code> | The numeric ID of this VPN gateway interface. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfaces.property.interconnectAttachment">interconnectAttachment</a></code> | <code>java.lang.String</code> | URL of the interconnect attachment resource. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfaces.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

The numeric ID of this VPN gateway interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_ha_vpn_gateway#id GoogleComputeHaVpnGateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnectAttachment`<sup>Optional</sup> <a name="interconnectAttachment" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfaces.property.interconnectAttachment"></a>

```java
public java.lang.String getInterconnectAttachment();
```

- *Type:* java.lang.String

URL of the interconnect attachment resource.

When the value
of this field is present, the VPN Gateway will be used for
IPsec-encrypted Cloud Interconnect; all Egress or Ingress
traffic for this VPN Gateway interface will go through the
specified interconnect attachment resource.

Not currently available publicly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_ha_vpn_gateway#interconnect_attachment GoogleComputeHaVpnGateway#interconnect_attachment}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeHaVpnGatewayTimeoutsOutputReference <a name="GoogleComputeHaVpnGatewayTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_ha_vpn_gateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference;

new GoogleComputeHaVpnGatewayTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeouts">GoogleComputeHaVpnGatewayTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayTimeouts">GoogleComputeHaVpnGatewayTimeouts</a>

---


### GoogleComputeHaVpnGatewayVpnInterfacesList <a name="GoogleComputeHaVpnGatewayVpnInterfacesList" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_ha_vpn_gateway.GoogleComputeHaVpnGatewayVpnInterfacesList;

new GoogleComputeHaVpnGatewayVpnInterfacesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesList.get"></a>

```java
public GoogleComputeHaVpnGatewayVpnInterfacesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfaces">GoogleComputeHaVpnGatewayVpnInterfaces</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfaces">GoogleComputeHaVpnGatewayVpnInterfaces</a>>

---


### GoogleComputeHaVpnGatewayVpnInterfacesOutputReference <a name="GoogleComputeHaVpnGatewayVpnInterfacesOutputReference" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_ha_vpn_gateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference;

new GoogleComputeHaVpnGatewayVpnInterfacesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.resetInterconnectAttachment">resetInterconnectAttachment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetInterconnectAttachment` <a name="resetInterconnectAttachment" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.resetInterconnectAttachment"></a>

```java
public void resetInterconnectAttachment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.idInput">idInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.interconnectAttachmentInput">interconnectAttachmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.id">id</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.interconnectAttachment">interconnectAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfaces">GoogleComputeHaVpnGatewayVpnInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.idInput"></a>

```java
public java.lang.Number getIdInput();
```

- *Type:* java.lang.Number

---

##### `interconnectAttachmentInput`<sup>Optional</sup> <a name="interconnectAttachmentInput" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.interconnectAttachmentInput"></a>

```java
public java.lang.String getInterconnectAttachmentInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.id"></a>

```java
public java.lang.Number getId();
```

- *Type:* java.lang.Number

---

##### `interconnectAttachment`<sup>Required</sup> <a name="interconnectAttachment" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.interconnectAttachment"></a>

```java
public java.lang.String getInterconnectAttachment();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfacesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeHaVpnGateway.GoogleComputeHaVpnGatewayVpnInterfaces">GoogleComputeHaVpnGatewayVpnInterfaces</a>

---



