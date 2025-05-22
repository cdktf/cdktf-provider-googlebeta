# `googleNetworkSecurityInterceptEndpointGroupAssociation` Submodule <a name="`googleNetworkSecurityInterceptEndpointGroupAssociation` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityInterceptEndpointGroupAssociation <a name="GoogleNetworkSecurityInterceptEndpointGroupAssociation" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_network_security_intercept_endpoint_group_association google_network_security_intercept_endpoint_group_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_intercept_endpoint_group_association.GoogleNetworkSecurityInterceptEndpointGroupAssociation;

GoogleNetworkSecurityInterceptEndpointGroupAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .interceptEndpointGroup(java.lang.String)
    .location(java.lang.String)
    .network(java.lang.String)
//  .id(java.lang.String)
//  .interceptEndpointGroupAssociationId(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.interceptEndpointGroup">interceptEndpointGroup</a></code> | <code>java.lang.String</code> | The endpoint group that this association is connected to, for example: 'projects/123456789/locations/global/interceptEndpointGroups/my-eg'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The cloud location of the association, currently restricted to 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The VPC network that is associated. for example: 'projects/123456789/global/networks/my-network'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_network_security_intercept_endpoint_group_association#id GoogleNetworkSecurityInterceptEndpointGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.interceptEndpointGroupAssociationId">interceptEndpointGroupAssociationId</a></code> | <code>java.lang.String</code> | The ID to use for the new association, which will become the final component of the endpoint group's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_network_security_intercept_endpoint_group_association#project GoogleNetworkSecurityInterceptEndpointGroupAssociation#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts">GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `interceptEndpointGroup`<sup>Required</sup> <a name="interceptEndpointGroup" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.interceptEndpointGroup"></a>

- *Type:* java.lang.String

The endpoint group that this association is connected to, for example: 'projects/123456789/locations/global/interceptEndpointGroups/my-eg'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_network_security_intercept_endpoint_group_association#intercept_endpoint_group GoogleNetworkSecurityInterceptEndpointGroupAssociation#intercept_endpoint_group}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The cloud location of the association, currently restricted to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_network_security_intercept_endpoint_group_association#location GoogleNetworkSecurityInterceptEndpointGroupAssociation#location}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The VPC network that is associated. for example: 'projects/123456789/global/networks/my-network'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_network_security_intercept_endpoint_group_association#network GoogleNetworkSecurityInterceptEndpointGroupAssociation#network}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_network_security_intercept_endpoint_group_association#id GoogleNetworkSecurityInterceptEndpointGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interceptEndpointGroupAssociationId`<sup>Optional</sup> <a name="interceptEndpointGroupAssociationId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.interceptEndpointGroupAssociationId"></a>

- *Type:* java.lang.String

The ID to use for the new association, which will become the final component of the endpoint group's resource name.

If not provided, the
server will generate a unique ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_network_security_intercept_endpoint_group_association#intercept_endpoint_group_association_id GoogleNetworkSecurityInterceptEndpointGroupAssociation#intercept_endpoint_group_association_id}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_network_security_intercept_endpoint_group_association#labels GoogleNetworkSecurityInterceptEndpointGroupAssociation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_network_security_intercept_endpoint_group_association#project GoogleNetworkSecurityInterceptEndpointGroupAssociation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts">GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_network_security_intercept_endpoint_group_association#timeouts GoogleNetworkSecurityInterceptEndpointGroupAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.resetInterceptEndpointGroupAssociationId">resetInterceptEndpointGroupAssociationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts">GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetInterceptEndpointGroupAssociationId` <a name="resetInterceptEndpointGroupAssociationId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.resetInterceptEndpointGroupAssociationId"></a>

```java
public void resetInterceptEndpointGroupAssociationId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityInterceptEndpointGroupAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_intercept_endpoint_group_association.GoogleNetworkSecurityInterceptEndpointGroupAssociation;

GoogleNetworkSecurityInterceptEndpointGroupAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_intercept_endpoint_group_association.GoogleNetworkSecurityInterceptEndpointGroupAssociation;

GoogleNetworkSecurityInterceptEndpointGroupAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_intercept_endpoint_group_association.GoogleNetworkSecurityInterceptEndpointGroupAssociation;

GoogleNetworkSecurityInterceptEndpointGroupAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_intercept_endpoint_group_association.GoogleNetworkSecurityInterceptEndpointGroupAssociation;

GoogleNetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleNetworkSecurityInterceptEndpointGroupAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetworkSecurityInterceptEndpointGroupAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetworkSecurityInterceptEndpointGroupAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_network_security_intercept_endpoint_group_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityInterceptEndpointGroupAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.locations">locations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList">GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.locationsDetails">locationsDetails</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList">GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.reconciling">reconciling</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference">GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroupAssociationIdInput">interceptEndpointGroupAssociationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroupInput">interceptEndpointGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts">GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroup">interceptEndpointGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroupAssociationId">interceptEndpointGroupAssociationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.locations"></a>

```java
public GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList getLocations();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList">GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList</a>

---

##### `locationsDetails`<sup>Required</sup> <a name="locationsDetails" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.locationsDetails"></a>

```java
public GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList getLocationsDetails();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList">GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.timeouts"></a>

```java
public GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference">GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `interceptEndpointGroupAssociationIdInput`<sup>Optional</sup> <a name="interceptEndpointGroupAssociationIdInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroupAssociationIdInput"></a>

```java
public java.lang.String getInterceptEndpointGroupAssociationIdInput();
```

- *Type:* java.lang.String

---

##### `interceptEndpointGroupInput`<sup>Optional</sup> <a name="interceptEndpointGroupInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroupInput"></a>

```java
public java.lang.String getInterceptEndpointGroupInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts">GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `interceptEndpointGroup`<sup>Required</sup> <a name="interceptEndpointGroup" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroup"></a>

```java
public java.lang.String getInterceptEndpointGroup();
```

- *Type:* java.lang.String

---

##### `interceptEndpointGroupAssociationId`<sup>Required</sup> <a name="interceptEndpointGroupAssociationId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroupAssociationId"></a>

```java
public java.lang.String getInterceptEndpointGroupAssociationId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig <a name="GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_intercept_endpoint_group_association.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig;

GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig.builder()
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
    .interceptEndpointGroup(java.lang.String)
    .location(java.lang.String)
    .network(java.lang.String)
//  .id(java.lang.String)
//  .interceptEndpointGroupAssociationId(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig.property.interceptEndpointGroup">interceptEndpointGroup</a></code> | <code>java.lang.String</code> | The endpoint group that this association is connected to, for example: 'projects/123456789/locations/global/interceptEndpointGroups/my-eg'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig.property.location">location</a></code> | <code>java.lang.String</code> | The cloud location of the association, currently restricted to 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig.property.network">network</a></code> | <code>java.lang.String</code> | The VPC network that is associated. for example: 'projects/123456789/global/networks/my-network'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_network_security_intercept_endpoint_group_association#id GoogleNetworkSecurityInterceptEndpointGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig.property.interceptEndpointGroupAssociationId">interceptEndpointGroupAssociationId</a></code> | <code>java.lang.String</code> | The ID to use for the new association, which will become the final component of the endpoint group's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_network_security_intercept_endpoint_group_association#project GoogleNetworkSecurityInterceptEndpointGroupAssociation#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts">GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `interceptEndpointGroup`<sup>Required</sup> <a name="interceptEndpointGroup" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig.property.interceptEndpointGroup"></a>

```java
public java.lang.String getInterceptEndpointGroup();
```

- *Type:* java.lang.String

The endpoint group that this association is connected to, for example: 'projects/123456789/locations/global/interceptEndpointGroups/my-eg'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_network_security_intercept_endpoint_group_association#intercept_endpoint_group GoogleNetworkSecurityInterceptEndpointGroupAssociation#intercept_endpoint_group}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The cloud location of the association, currently restricted to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_network_security_intercept_endpoint_group_association#location GoogleNetworkSecurityInterceptEndpointGroupAssociation#location}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The VPC network that is associated. for example: 'projects/123456789/global/networks/my-network'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_network_security_intercept_endpoint_group_association#network GoogleNetworkSecurityInterceptEndpointGroupAssociation#network}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_network_security_intercept_endpoint_group_association#id GoogleNetworkSecurityInterceptEndpointGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interceptEndpointGroupAssociationId`<sup>Optional</sup> <a name="interceptEndpointGroupAssociationId" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig.property.interceptEndpointGroupAssociationId"></a>

```java
public java.lang.String getInterceptEndpointGroupAssociationId();
```

- *Type:* java.lang.String

The ID to use for the new association, which will become the final component of the endpoint group's resource name.

If not provided, the
server will generate a unique ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_network_security_intercept_endpoint_group_association#intercept_endpoint_group_association_id GoogleNetworkSecurityInterceptEndpointGroupAssociation#intercept_endpoint_group_association_id}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_network_security_intercept_endpoint_group_association#labels GoogleNetworkSecurityInterceptEndpointGroupAssociation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_network_security_intercept_endpoint_group_association#project GoogleNetworkSecurityInterceptEndpointGroupAssociation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationConfig.property.timeouts"></a>

```java
public GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts">GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_network_security_intercept_endpoint_group_association#timeouts GoogleNetworkSecurityInterceptEndpointGroupAssociation#timeouts}

---

### GoogleNetworkSecurityInterceptEndpointGroupAssociationLocations <a name="GoogleNetworkSecurityInterceptEndpointGroupAssociationLocations" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_intercept_endpoint_group_association.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocations;

GoogleNetworkSecurityInterceptEndpointGroupAssociationLocations.builder()
    .build();
```


### GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetails <a name="GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetails" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_intercept_endpoint_group_association.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetails;

GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetails.builder()
    .build();
```


### GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts <a name="GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_intercept_endpoint_group_association.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts;

GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_network_security_intercept_endpoint_group_association#create GoogleNetworkSecurityInterceptEndpointGroupAssociation#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_network_security_intercept_endpoint_group_association#delete GoogleNetworkSecurityInterceptEndpointGroupAssociation#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_network_security_intercept_endpoint_group_association#update GoogleNetworkSecurityInterceptEndpointGroupAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_network_security_intercept_endpoint_group_association#create GoogleNetworkSecurityInterceptEndpointGroupAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_network_security_intercept_endpoint_group_association#delete GoogleNetworkSecurityInterceptEndpointGroupAssociation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/resources/google_network_security_intercept_endpoint_group_association#update GoogleNetworkSecurityInterceptEndpointGroupAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList <a name="GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_intercept_endpoint_group_association.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList;

new GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.get"></a>

```java
public GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference <a name="GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_intercept_endpoint_group_association.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference;

new GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetails">GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.internalValue"></a>

```java
public GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetails getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetails">GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsDetails</a>

---


### GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList <a name="GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_intercept_endpoint_group_association.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList;

new GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList.get"></a>

```java
public GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference <a name="GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_intercept_endpoint_group_association.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference;

new GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocations">GoogleNetworkSecurityInterceptEndpointGroupAssociationLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.internalValue"></a>

```java
public GoogleNetworkSecurityInterceptEndpointGroupAssociationLocations getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationLocations">GoogleNetworkSecurityInterceptEndpointGroupAssociationLocations</a>

---


### GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference <a name="GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_intercept_endpoint_group_association.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference;

new GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts">GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroupAssociation.GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts">GoogleNetworkSecurityInterceptEndpointGroupAssociationTimeouts</a>

---



