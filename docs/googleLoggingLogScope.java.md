# `googleLoggingLogScope` Submodule <a name="`googleLoggingLogScope` Submodule" id="@cdktf/provider-google-beta.googleLoggingLogScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleLoggingLogScope <a name="GoogleLoggingLogScope" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_log_scope google_logging_log_scope}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_log_scope.GoogleLoggingLogScope;

GoogleLoggingLogScope.Builder.create(Construct scope, java.lang.String id)
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
    .resourceNames(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .parent(java.lang.String)
//  .timeouts(GoogleLoggingLogScopeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource name of the log scope. For example: \'projects/my-project/locations/global/logScopes/my-log-scope\'. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer.parameter.resourceNames">resourceNames</a></code> | <code>java.util.List<java.lang.String></code> | Names of one or more parent resources : *  \'projects/[PROJECT_ID]\' May alternatively be one or more views : * \'projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]\' A log scope can include a maximum of 50 projects and a maximum of 100 resources in total. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Describes this log scopes. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_log_scope#id GoogleLoggingLogScope#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. The only supported location is global so far. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The parent of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeouts">GoogleLoggingLogScopeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource name of the log scope. For example: \'projects/my-project/locations/global/logScopes/my-log-scope\'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_log_scope#name GoogleLoggingLogScope#name}

---

##### `resourceNames`<sup>Required</sup> <a name="resourceNames" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer.parameter.resourceNames"></a>

- *Type:* java.util.List<java.lang.String>

Names of one or more parent resources : *  \'projects/[PROJECT_ID]\' May alternatively be one or more views : * \'projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]\' A log scope can include a maximum of 50 projects and a maximum of 100 resources in total.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_log_scope#resource_names GoogleLoggingLogScope#resource_names}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Describes this log scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_log_scope#description GoogleLoggingLogScope#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_log_scope#id GoogleLoggingLogScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the resource. The only supported location is global so far.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_log_scope#location GoogleLoggingLogScope#location}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The parent of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_log_scope#parent GoogleLoggingLogScope#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeouts">GoogleLoggingLogScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_log_scope#timeouts GoogleLoggingLogScope#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.putTimeouts"></a>

```java
public void putTimeouts(GoogleLoggingLogScopeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeouts">GoogleLoggingLogScopeTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.resetParent"></a>

```java
public void resetParent()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleLoggingLogScope resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_log_scope.GoogleLoggingLogScope;

GoogleLoggingLogScope.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_log_scope.GoogleLoggingLogScope;

GoogleLoggingLogScope.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_log_scope.GoogleLoggingLogScope;

GoogleLoggingLogScope.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_log_scope.GoogleLoggingLogScope;

GoogleLoggingLogScope.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleLoggingLogScope.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleLoggingLogScope resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleLoggingLogScope to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleLoggingLogScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_log_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleLoggingLogScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference">GoogleLoggingLogScopeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.resourceNamesInput">resourceNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeouts">GoogleLoggingLogScopeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.resourceNames">resourceNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.timeouts"></a>

```java
public GoogleLoggingLogScopeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference">GoogleLoggingLogScopeTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `resourceNamesInput`<sup>Optional</sup> <a name="resourceNamesInput" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.resourceNamesInput"></a>

```java
public java.util.List<java.lang.String> getResourceNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeouts">GoogleLoggingLogScopeTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `resourceNames`<sup>Required</sup> <a name="resourceNames" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.resourceNames"></a>

```java
public java.util.List<java.lang.String> getResourceNames();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScope.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleLoggingLogScopeConfig <a name="GoogleLoggingLogScopeConfig" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_log_scope.GoogleLoggingLogScopeConfig;

GoogleLoggingLogScopeConfig.builder()
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
    .resourceNames(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .parent(java.lang.String)
//  .timeouts(GoogleLoggingLogScopeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource name of the log scope. For example: \'projects/my-project/locations/global/logScopes/my-log-scope\'. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeConfig.property.resourceNames">resourceNames</a></code> | <code>java.util.List<java.lang.String></code> | Names of one or more parent resources : *  \'projects/[PROJECT_ID]\' May alternatively be one or more views : * \'projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]\' A log scope can include a maximum of 50 projects and a maximum of 100 resources in total. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeConfig.property.description">description</a></code> | <code>java.lang.String</code> | Describes this log scopes. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_log_scope#id GoogleLoggingLogScope#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. The only supported location is global so far. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The parent of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeouts">GoogleLoggingLogScopeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name of the log scope. For example: \'projects/my-project/locations/global/logScopes/my-log-scope\'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_log_scope#name GoogleLoggingLogScope#name}

---

##### `resourceNames`<sup>Required</sup> <a name="resourceNames" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeConfig.property.resourceNames"></a>

```java
public java.util.List<java.lang.String> getResourceNames();
```

- *Type:* java.util.List<java.lang.String>

Names of one or more parent resources : *  \'projects/[PROJECT_ID]\' May alternatively be one or more views : * \'projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/views/[VIEW_ID]\' A log scope can include a maximum of 50 projects and a maximum of 100 resources in total.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_log_scope#resource_names GoogleLoggingLogScope#resource_names}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Describes this log scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_log_scope#description GoogleLoggingLogScope#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_log_scope#id GoogleLoggingLogScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the resource. The only supported location is global so far.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_log_scope#location GoogleLoggingLogScope#location}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The parent of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_log_scope#parent GoogleLoggingLogScope#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeConfig.property.timeouts"></a>

```java
public GoogleLoggingLogScopeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeouts">GoogleLoggingLogScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_log_scope#timeouts GoogleLoggingLogScope#timeouts}

---

### GoogleLoggingLogScopeTimeouts <a name="GoogleLoggingLogScopeTimeouts" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_log_scope.GoogleLoggingLogScopeTimeouts;

GoogleLoggingLogScopeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_log_scope#create GoogleLoggingLogScope#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_log_scope#delete GoogleLoggingLogScope#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_log_scope#update GoogleLoggingLogScope#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_log_scope#create GoogleLoggingLogScope#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_log_scope#delete GoogleLoggingLogScope#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_logging_log_scope#update GoogleLoggingLogScope#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleLoggingLogScopeTimeoutsOutputReference <a name="GoogleLoggingLogScopeTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_logging_log_scope.GoogleLoggingLogScopeTimeoutsOutputReference;

new GoogleLoggingLogScopeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeouts">GoogleLoggingLogScopeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleLoggingLogScope.GoogleLoggingLogScopeTimeouts">GoogleLoggingLogScopeTimeouts</a>

---



