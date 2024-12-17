# `googleNetworkSecurityFirewallEndpointAssociation` Submodule <a name="`googleNetworkSecurityFirewallEndpointAssociation` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityFirewallEndpointAssociation <a name="GoogleNetworkSecurityFirewallEndpointAssociation" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_network_security_firewall_endpoint_association google_network_security_firewall_endpoint_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_firewall_endpoint_association.GoogleNetworkSecurityFirewallEndpointAssociation;

GoogleNetworkSecurityFirewallEndpointAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .firewallEndpoint(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .network(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .parent(java.lang.String)
//  .timeouts(GoogleNetworkSecurityFirewallEndpointAssociationTimeouts)
//  .tlsInspectionPolicy(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.firewallEndpoint">firewallEndpoint</a></code> | <code>java.lang.String</code> | The URL of the firewall endpoint that is being associated. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location (zone) of the firewall endpoint association. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the firewall endpoint association resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The URL of the network that is being associated. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the association is disabled. True indicates that traffic will not be intercepted. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_network_security_firewall_endpoint_association#id GoogleNetworkSecurityFirewallEndpointAssociation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The name of the parent this firewall endpoint association belongs to. Format: projects/{project_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeouts">GoogleNetworkSecurityFirewallEndpointAssociationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.tlsInspectionPolicy">tlsInspectionPolicy</a></code> | <code>java.lang.String</code> | The URL of the TlsInspectionPolicy that is being associated. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `firewallEndpoint`<sup>Required</sup> <a name="firewallEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.firewallEndpoint"></a>

- *Type:* java.lang.String

The URL of the firewall endpoint that is being associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_network_security_firewall_endpoint_association#firewall_endpoint GoogleNetworkSecurityFirewallEndpointAssociation#firewall_endpoint}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location (zone) of the firewall endpoint association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_network_security_firewall_endpoint_association#location GoogleNetworkSecurityFirewallEndpointAssociation#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the firewall endpoint association resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_network_security_firewall_endpoint_association#name GoogleNetworkSecurityFirewallEndpointAssociation#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The URL of the network that is being associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_network_security_firewall_endpoint_association#network GoogleNetworkSecurityFirewallEndpointAssociation#network}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.disabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the association is disabled. True indicates that traffic will not be intercepted.

~> **Note:** The API will reject the request if this value is set to true when creating the resource,
otherwise on an update the association can be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_network_security_firewall_endpoint_association#disabled GoogleNetworkSecurityFirewallEndpointAssociation#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_network_security_firewall_endpoint_association#id GoogleNetworkSecurityFirewallEndpointAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_network_security_firewall_endpoint_association#labels GoogleNetworkSecurityFirewallEndpointAssociation#labels}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The name of the parent this firewall endpoint association belongs to. Format: projects/{project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_network_security_firewall_endpoint_association#parent GoogleNetworkSecurityFirewallEndpointAssociation#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeouts">GoogleNetworkSecurityFirewallEndpointAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_network_security_firewall_endpoint_association#timeouts GoogleNetworkSecurityFirewallEndpointAssociation#timeouts}

---

##### `tlsInspectionPolicy`<sup>Optional</sup> <a name="tlsInspectionPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.tlsInspectionPolicy"></a>

- *Type:* java.lang.String

The URL of the TlsInspectionPolicy that is being associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_network_security_firewall_endpoint_association#tls_inspection_policy GoogleNetworkSecurityFirewallEndpointAssociation#tls_inspection_policy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.resetTlsInspectionPolicy">resetTlsInspectionPolicy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetworkSecurityFirewallEndpointAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeouts">GoogleNetworkSecurityFirewallEndpointAssociationTimeouts</a>

---

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.resetParent"></a>

```java
public void resetParent()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTlsInspectionPolicy` <a name="resetTlsInspectionPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.resetTlsInspectionPolicy"></a>

```java
public void resetTlsInspectionPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityFirewallEndpointAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_firewall_endpoint_association.GoogleNetworkSecurityFirewallEndpointAssociation;

GoogleNetworkSecurityFirewallEndpointAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_firewall_endpoint_association.GoogleNetworkSecurityFirewallEndpointAssociation;

GoogleNetworkSecurityFirewallEndpointAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_firewall_endpoint_association.GoogleNetworkSecurityFirewallEndpointAssociation;

GoogleNetworkSecurityFirewallEndpointAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_firewall_endpoint_association.GoogleNetworkSecurityFirewallEndpointAssociation;

GoogleNetworkSecurityFirewallEndpointAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetworkSecurityFirewallEndpointAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleNetworkSecurityFirewallEndpointAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetworkSecurityFirewallEndpointAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetworkSecurityFirewallEndpointAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_network_security_firewall_endpoint_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityFirewallEndpointAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.reconciling">reconciling</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference">GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.firewallEndpointInput">firewallEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeouts">GoogleNetworkSecurityFirewallEndpointAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.tlsInspectionPolicyInput">tlsInspectionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.firewallEndpoint">firewallEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.tlsInspectionPolicy">tlsInspectionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.timeouts"></a>

```java
public GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference">GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `firewallEndpointInput`<sup>Optional</sup> <a name="firewallEndpointInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.firewallEndpointInput"></a>

```java
public java.lang.String getFirewallEndpointInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeouts">GoogleNetworkSecurityFirewallEndpointAssociationTimeouts</a>

---

##### `tlsInspectionPolicyInput`<sup>Optional</sup> <a name="tlsInspectionPolicyInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.tlsInspectionPolicyInput"></a>

```java
public java.lang.String getTlsInspectionPolicyInput();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `firewallEndpoint`<sup>Required</sup> <a name="firewallEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.firewallEndpoint"></a>

```java
public java.lang.String getFirewallEndpoint();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `tlsInspectionPolicy`<sup>Required</sup> <a name="tlsInspectionPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.tlsInspectionPolicy"></a>

```java
public java.lang.String getTlsInspectionPolicy();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityFirewallEndpointAssociationConfig <a name="GoogleNetworkSecurityFirewallEndpointAssociationConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_firewall_endpoint_association.GoogleNetworkSecurityFirewallEndpointAssociationConfig;

GoogleNetworkSecurityFirewallEndpointAssociationConfig.builder()
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
    .firewallEndpoint(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .network(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .parent(java.lang.String)
//  .timeouts(GoogleNetworkSecurityFirewallEndpointAssociationTimeouts)
//  .tlsInspectionPolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.firewallEndpoint">firewallEndpoint</a></code> | <code>java.lang.String</code> | The URL of the firewall endpoint that is being associated. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location (zone) of the firewall endpoint association. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the firewall endpoint association resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.network">network</a></code> | <code>java.lang.String</code> | The URL of the network that is being associated. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the association is disabled. True indicates that traffic will not be intercepted. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_network_security_firewall_endpoint_association#id GoogleNetworkSecurityFirewallEndpointAssociation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The name of the parent this firewall endpoint association belongs to. Format: projects/{project_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeouts">GoogleNetworkSecurityFirewallEndpointAssociationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.tlsInspectionPolicy">tlsInspectionPolicy</a></code> | <code>java.lang.String</code> | The URL of the TlsInspectionPolicy that is being associated. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `firewallEndpoint`<sup>Required</sup> <a name="firewallEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.firewallEndpoint"></a>

```java
public java.lang.String getFirewallEndpoint();
```

- *Type:* java.lang.String

The URL of the firewall endpoint that is being associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_network_security_firewall_endpoint_association#firewall_endpoint GoogleNetworkSecurityFirewallEndpointAssociation#firewall_endpoint}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location (zone) of the firewall endpoint association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_network_security_firewall_endpoint_association#location GoogleNetworkSecurityFirewallEndpointAssociation#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the firewall endpoint association resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_network_security_firewall_endpoint_association#name GoogleNetworkSecurityFirewallEndpointAssociation#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The URL of the network that is being associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_network_security_firewall_endpoint_association#network GoogleNetworkSecurityFirewallEndpointAssociation#network}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the association is disabled. True indicates that traffic will not be intercepted.

~> **Note:** The API will reject the request if this value is set to true when creating the resource,
otherwise on an update the association can be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_network_security_firewall_endpoint_association#disabled GoogleNetworkSecurityFirewallEndpointAssociation#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_network_security_firewall_endpoint_association#id GoogleNetworkSecurityFirewallEndpointAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_network_security_firewall_endpoint_association#labels GoogleNetworkSecurityFirewallEndpointAssociation#labels}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The name of the parent this firewall endpoint association belongs to. Format: projects/{project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_network_security_firewall_endpoint_association#parent GoogleNetworkSecurityFirewallEndpointAssociation#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.timeouts"></a>

```java
public GoogleNetworkSecurityFirewallEndpointAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeouts">GoogleNetworkSecurityFirewallEndpointAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_network_security_firewall_endpoint_association#timeouts GoogleNetworkSecurityFirewallEndpointAssociation#timeouts}

---

##### `tlsInspectionPolicy`<sup>Optional</sup> <a name="tlsInspectionPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.tlsInspectionPolicy"></a>

```java
public java.lang.String getTlsInspectionPolicy();
```

- *Type:* java.lang.String

The URL of the TlsInspectionPolicy that is being associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_network_security_firewall_endpoint_association#tls_inspection_policy GoogleNetworkSecurityFirewallEndpointAssociation#tls_inspection_policy}

---

### GoogleNetworkSecurityFirewallEndpointAssociationTimeouts <a name="GoogleNetworkSecurityFirewallEndpointAssociationTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_firewall_endpoint_association.GoogleNetworkSecurityFirewallEndpointAssociationTimeouts;

GoogleNetworkSecurityFirewallEndpointAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_network_security_firewall_endpoint_association#create GoogleNetworkSecurityFirewallEndpointAssociation#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_network_security_firewall_endpoint_association#delete GoogleNetworkSecurityFirewallEndpointAssociation#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_network_security_firewall_endpoint_association#update GoogleNetworkSecurityFirewallEndpointAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_network_security_firewall_endpoint_association#create GoogleNetworkSecurityFirewallEndpointAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_network_security_firewall_endpoint_association#delete GoogleNetworkSecurityFirewallEndpointAssociation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.0/docs/resources/google_network_security_firewall_endpoint_association#update GoogleNetworkSecurityFirewallEndpointAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference <a name="GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_firewall_endpoint_association.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference;

new GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeouts">GoogleNetworkSecurityFirewallEndpointAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeouts">GoogleNetworkSecurityFirewallEndpointAssociationTimeouts</a>

---



