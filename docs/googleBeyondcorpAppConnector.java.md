# `googleBeyondcorpAppConnector` Submodule <a name="`googleBeyondcorpAppConnector` Submodule" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBeyondcorpAppConnector <a name="GoogleBeyondcorpAppConnector" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_beyondcorp_app_connector google_beyondcorp_app_connector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_app_connector.GoogleBeyondcorpAppConnector;

GoogleBeyondcorpAppConnector.Builder.create(Construct scope, java.lang.String id)
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
    .principalInfo(GoogleBeyondcorpAppConnectorPrincipalInfo)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(GoogleBeyondcorpAppConnectorTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | ID of the AppConnector. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.principalInfo">principalInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfo">GoogleBeyondcorpAppConnectorPrincipalInfo</a></code> | principal_info block. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | An arbitrary user-provided name for the AppConnector. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_beyondcorp_app_connector#id GoogleBeyondcorpAppConnector#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_beyondcorp_app_connector#project GoogleBeyondcorpAppConnector#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region of the AppConnector. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeouts">GoogleBeyondcorpAppConnectorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.name"></a>

- *Type:* java.lang.String

ID of the AppConnector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_beyondcorp_app_connector#name GoogleBeyondcorpAppConnector#name}

---

##### `principalInfo`<sup>Required</sup> <a name="principalInfo" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.principalInfo"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfo">GoogleBeyondcorpAppConnectorPrincipalInfo</a>

principal_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_beyondcorp_app_connector#principal_info GoogleBeyondcorpAppConnector#principal_info}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

An arbitrary user-provided name for the AppConnector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_beyondcorp_app_connector#display_name GoogleBeyondcorpAppConnector#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_beyondcorp_app_connector#id GoogleBeyondcorpAppConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_beyondcorp_app_connector#labels GoogleBeyondcorpAppConnector#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_beyondcorp_app_connector#project GoogleBeyondcorpAppConnector#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region of the AppConnector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_beyondcorp_app_connector#region GoogleBeyondcorpAppConnector#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeouts">GoogleBeyondcorpAppConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_beyondcorp_app_connector#timeouts GoogleBeyondcorpAppConnector#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.putPrincipalInfo">putPrincipalInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPrincipalInfo` <a name="putPrincipalInfo" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.putPrincipalInfo"></a>

```java
public void putPrincipalInfo(GoogleBeyondcorpAppConnectorPrincipalInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.putPrincipalInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfo">GoogleBeyondcorpAppConnectorPrincipalInfo</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.putTimeouts"></a>

```java
public void putTimeouts(GoogleBeyondcorpAppConnectorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeouts">GoogleBeyondcorpAppConnectorTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBeyondcorpAppConnector resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_app_connector.GoogleBeyondcorpAppConnector;

GoogleBeyondcorpAppConnector.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_app_connector.GoogleBeyondcorpAppConnector;

GoogleBeyondcorpAppConnector.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_app_connector.GoogleBeyondcorpAppConnector;

GoogleBeyondcorpAppConnector.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_app_connector.GoogleBeyondcorpAppConnector;

GoogleBeyondcorpAppConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleBeyondcorpAppConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleBeyondcorpAppConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleBeyondcorpAppConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleBeyondcorpAppConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_beyondcorp_app_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBeyondcorpAppConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.principalInfo">principalInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference">GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference">GoogleBeyondcorpAppConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.principalInfoInput">principalInfoInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfo">GoogleBeyondcorpAppConnectorPrincipalInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeouts">GoogleBeyondcorpAppConnectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `principalInfo`<sup>Required</sup> <a name="principalInfo" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.principalInfo"></a>

```java
public GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference getPrincipalInfo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference">GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.timeouts"></a>

```java
public GoogleBeyondcorpAppConnectorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference">GoogleBeyondcorpAppConnectorTimeoutsOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `principalInfoInput`<sup>Optional</sup> <a name="principalInfoInput" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.principalInfoInput"></a>

```java
public GoogleBeyondcorpAppConnectorPrincipalInfo getPrincipalInfoInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfo">GoogleBeyondcorpAppConnectorPrincipalInfo</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeouts">GoogleBeyondcorpAppConnectorTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnector.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBeyondcorpAppConnectorConfig <a name="GoogleBeyondcorpAppConnectorConfig" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_app_connector.GoogleBeyondcorpAppConnectorConfig;

GoogleBeyondcorpAppConnectorConfig.builder()
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
    .principalInfo(GoogleBeyondcorpAppConnectorPrincipalInfo)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(GoogleBeyondcorpAppConnectorTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorConfig.property.name">name</a></code> | <code>java.lang.String</code> | ID of the AppConnector. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorConfig.property.principalInfo">principalInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfo">GoogleBeyondcorpAppConnectorPrincipalInfo</a></code> | principal_info block. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | An arbitrary user-provided name for the AppConnector. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_beyondcorp_app_connector#id GoogleBeyondcorpAppConnector#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_beyondcorp_app_connector#project GoogleBeyondcorpAppConnector#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region of the AppConnector. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeouts">GoogleBeyondcorpAppConnectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

ID of the AppConnector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_beyondcorp_app_connector#name GoogleBeyondcorpAppConnector#name}

---

##### `principalInfo`<sup>Required</sup> <a name="principalInfo" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorConfig.property.principalInfo"></a>

```java
public GoogleBeyondcorpAppConnectorPrincipalInfo getPrincipalInfo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfo">GoogleBeyondcorpAppConnectorPrincipalInfo</a>

principal_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_beyondcorp_app_connector#principal_info GoogleBeyondcorpAppConnector#principal_info}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

An arbitrary user-provided name for the AppConnector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_beyondcorp_app_connector#display_name GoogleBeyondcorpAppConnector#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_beyondcorp_app_connector#id GoogleBeyondcorpAppConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_beyondcorp_app_connector#labels GoogleBeyondcorpAppConnector#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_beyondcorp_app_connector#project GoogleBeyondcorpAppConnector#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of the AppConnector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_beyondcorp_app_connector#region GoogleBeyondcorpAppConnector#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorConfig.property.timeouts"></a>

```java
public GoogleBeyondcorpAppConnectorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeouts">GoogleBeyondcorpAppConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_beyondcorp_app_connector#timeouts GoogleBeyondcorpAppConnector#timeouts}

---

### GoogleBeyondcorpAppConnectorPrincipalInfo <a name="GoogleBeyondcorpAppConnectorPrincipalInfo" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_app_connector.GoogleBeyondcorpAppConnectorPrincipalInfo;

GoogleBeyondcorpAppConnectorPrincipalInfo.builder()
    .serviceAccount(GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfo.property.serviceAccount">serviceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount">GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount</a></code> | service_account block. |

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfo.property.serviceAccount"></a>

```java
public GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount getServiceAccount();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount">GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_beyondcorp_app_connector#service_account GoogleBeyondcorpAppConnector#service_account}

---

### GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount <a name="GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_app_connector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount;

GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount.builder()
    .email(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount.property.email">email</a></code> | <code>java.lang.String</code> | Email address of the service account. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Email address of the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_beyondcorp_app_connector#email GoogleBeyondcorpAppConnector#email}

---

### GoogleBeyondcorpAppConnectorTimeouts <a name="GoogleBeyondcorpAppConnectorTimeouts" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_app_connector.GoogleBeyondcorpAppConnectorTimeouts;

GoogleBeyondcorpAppConnectorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_beyondcorp_app_connector#create GoogleBeyondcorpAppConnector#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_beyondcorp_app_connector#delete GoogleBeyondcorpAppConnector#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_beyondcorp_app_connector#update GoogleBeyondcorpAppConnector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_beyondcorp_app_connector#create GoogleBeyondcorpAppConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_beyondcorp_app_connector#delete GoogleBeyondcorpAppConnector#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_beyondcorp_app_connector#update GoogleBeyondcorpAppConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference <a name="GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_app_connector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference;

new GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.putServiceAccount">putServiceAccount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServiceAccount` <a name="putServiceAccount" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.putServiceAccount"></a>

```java
public void putServiceAccount(GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.putServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount">GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.property.serviceAccount">serviceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference">GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount">GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfo">GoogleBeyondcorpAppConnectorPrincipalInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.property.serviceAccount"></a>

```java
public GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference getServiceAccount();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference">GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference</a>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.property.serviceAccountInput"></a>

```java
public GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount getServiceAccountInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount">GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoOutputReference.property.internalValue"></a>

```java
public GoogleBeyondcorpAppConnectorPrincipalInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfo">GoogleBeyondcorpAppConnectorPrincipalInfo</a>

---


### GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference <a name="GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_app_connector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference;

new GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount">GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccountOutputReference.property.internalValue"></a>

```java
public GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount">GoogleBeyondcorpAppConnectorPrincipalInfoServiceAccount</a>

---


### GoogleBeyondcorpAppConnectorTimeoutsOutputReference <a name="GoogleBeyondcorpAppConnectorTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_beyondcorp_app_connector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference;

new GoogleBeyondcorpAppConnectorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeouts">GoogleBeyondcorpAppConnectorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleBeyondcorpAppConnector.GoogleBeyondcorpAppConnectorTimeouts">GoogleBeyondcorpAppConnectorTimeouts</a>

---



