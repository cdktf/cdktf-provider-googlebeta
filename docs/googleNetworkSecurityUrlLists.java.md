# `googleNetworkSecurityUrlLists` Submodule <a name="`googleNetworkSecurityUrlLists` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityUrlLists <a name="GoogleNetworkSecurityUrlLists" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_url_lists google_network_security_url_lists}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_url_lists.GoogleNetworkSecurityUrlLists;

GoogleNetworkSecurityUrlLists.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkSecurityUrlListsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the url lists. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Short name of the UrlList resource to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer.parameter.values">values</a></code> | <code>java.util.List<java.lang.String></code> | FQDNs and URLs. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Free-text description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_url_lists#id GoogleNetworkSecurityUrlLists#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_url_lists#project GoogleNetworkSecurityUrlLists#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeouts">GoogleNetworkSecurityUrlListsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the url lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_url_lists#location GoogleNetworkSecurityUrlLists#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Short name of the UrlList resource to be created.

This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. 'urlList'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_url_lists#name GoogleNetworkSecurityUrlLists#name}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer.parameter.values"></a>

- *Type:* java.util.List<java.lang.String>

FQDNs and URLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_url_lists#values GoogleNetworkSecurityUrlLists#values}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_url_lists#description GoogleNetworkSecurityUrlLists#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_url_lists#id GoogleNetworkSecurityUrlLists#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_url_lists#project GoogleNetworkSecurityUrlLists#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeouts">GoogleNetworkSecurityUrlListsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_url_lists#timeouts GoogleNetworkSecurityUrlLists#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetworkSecurityUrlListsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeouts">GoogleNetworkSecurityUrlListsTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityUrlLists resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_url_lists.GoogleNetworkSecurityUrlLists;

GoogleNetworkSecurityUrlLists.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_url_lists.GoogleNetworkSecurityUrlLists;

GoogleNetworkSecurityUrlLists.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_url_lists.GoogleNetworkSecurityUrlLists;

GoogleNetworkSecurityUrlLists.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_url_lists.GoogleNetworkSecurityUrlLists;

GoogleNetworkSecurityUrlLists.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetworkSecurityUrlLists.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleNetworkSecurityUrlLists resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetworkSecurityUrlLists to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetworkSecurityUrlLists that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_url_lists#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityUrlLists to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference">GoogleNetworkSecurityUrlListsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeouts">GoogleNetworkSecurityUrlListsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.timeouts"></a>

```java
public GoogleNetworkSecurityUrlListsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference">GoogleNetworkSecurityUrlListsTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeouts">GoogleNetworkSecurityUrlListsTimeouts</a>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlLists.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityUrlListsConfig <a name="GoogleNetworkSecurityUrlListsConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_url_lists.GoogleNetworkSecurityUrlListsConfig;

GoogleNetworkSecurityUrlListsConfig.builder()
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
    .location(java.lang.String)
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkSecurityUrlListsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the url lists. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsConfig.property.name">name</a></code> | <code>java.lang.String</code> | Short name of the UrlList resource to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsConfig.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | FQDNs and URLs. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsConfig.property.description">description</a></code> | <code>java.lang.String</code> | Free-text description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_url_lists#id GoogleNetworkSecurityUrlLists#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_url_lists#project GoogleNetworkSecurityUrlLists#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeouts">GoogleNetworkSecurityUrlListsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the url lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_url_lists#location GoogleNetworkSecurityUrlLists#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Short name of the UrlList resource to be created.

This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. 'urlList'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_url_lists#name GoogleNetworkSecurityUrlLists#name}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsConfig.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

FQDNs and URLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_url_lists#values GoogleNetworkSecurityUrlLists#values}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_url_lists#description GoogleNetworkSecurityUrlLists#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_url_lists#id GoogleNetworkSecurityUrlLists#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_url_lists#project GoogleNetworkSecurityUrlLists#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsConfig.property.timeouts"></a>

```java
public GoogleNetworkSecurityUrlListsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeouts">GoogleNetworkSecurityUrlListsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_url_lists#timeouts GoogleNetworkSecurityUrlLists#timeouts}

---

### GoogleNetworkSecurityUrlListsTimeouts <a name="GoogleNetworkSecurityUrlListsTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_url_lists.GoogleNetworkSecurityUrlListsTimeouts;

GoogleNetworkSecurityUrlListsTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_url_lists#create GoogleNetworkSecurityUrlLists#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_url_lists#delete GoogleNetworkSecurityUrlLists#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_url_lists#update GoogleNetworkSecurityUrlLists#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_url_lists#create GoogleNetworkSecurityUrlLists#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_url_lists#delete GoogleNetworkSecurityUrlLists#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_security_url_lists#update GoogleNetworkSecurityUrlLists#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityUrlListsTimeoutsOutputReference <a name="GoogleNetworkSecurityUrlListsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_url_lists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference;

new GoogleNetworkSecurityUrlListsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeouts">GoogleNetworkSecurityUrlListsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityUrlLists.GoogleNetworkSecurityUrlListsTimeouts">GoogleNetworkSecurityUrlListsTimeouts</a>

---



