# `googleGameServicesGameServerCluster` Submodule <a name="`googleGameServicesGameServerCluster` Submodule" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGameServicesGameServerCluster <a name="GoogleGameServicesGameServerCluster" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_cluster google_game_services_game_server_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_game_services_game_server_cluster.GoogleGameServicesGameServerCluster;

GoogleGameServicesGameServerCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .clusterId(java.lang.String)
    .connectionInfo(GoogleGameServicesGameServerClusterConnectionInfo)
    .realmId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleGameServicesGameServerClusterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Required. The resource name of the game server cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.connectionInfo">connectionInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfo">GoogleGameServicesGameServerClusterConnectionInfo</a></code> | connection_info block. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.realmId">realmId</a></code> | <code>java.lang.String</code> | The realm id of the game server realm. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Human readable description of the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_cluster#id GoogleGameServicesGameServerCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels associated with this game server cluster. Each label is a key-value pair. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location of the Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_cluster#project GoogleGameServicesGameServerCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts">GoogleGameServicesGameServerClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Required. The resource name of the game server cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_cluster#cluster_id GoogleGameServicesGameServerCluster#cluster_id}

---

##### `connectionInfo`<sup>Required</sup> <a name="connectionInfo" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.connectionInfo"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfo">GoogleGameServicesGameServerClusterConnectionInfo</a>

connection_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_cluster#connection_info GoogleGameServicesGameServerCluster#connection_info}

---

##### `realmId`<sup>Required</sup> <a name="realmId" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.realmId"></a>

- *Type:* java.lang.String

The realm id of the game server realm.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_cluster#realm_id GoogleGameServicesGameServerCluster#realm_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Human readable description of the cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_cluster#description GoogleGameServicesGameServerCluster#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_cluster#id GoogleGameServicesGameServerCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels associated with this game server cluster. Each label is a key-value pair.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_cluster#labels GoogleGameServicesGameServerCluster#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location of the Cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_cluster#location GoogleGameServicesGameServerCluster#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_cluster#project GoogleGameServicesGameServerCluster#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts">GoogleGameServicesGameServerClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_cluster#timeouts GoogleGameServicesGameServerCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.putConnectionInfo">putConnectionInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putConnectionInfo` <a name="putConnectionInfo" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.putConnectionInfo"></a>

```java
public void putConnectionInfo(GoogleGameServicesGameServerClusterConnectionInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.putConnectionInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfo">GoogleGameServicesGameServerClusterConnectionInfo</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.putTimeouts"></a>

```java
public void putTimeouts(GoogleGameServicesGameServerClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts">GoogleGameServicesGameServerClusterTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_game_services_game_server_cluster.GoogleGameServicesGameServerCluster;

GoogleGameServicesGameServerCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_game_services_game_server_cluster.GoogleGameServicesGameServerCluster;

GoogleGameServicesGameServerCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_game_services_game_server_cluster.GoogleGameServicesGameServerCluster;

GoogleGameServicesGameServerCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.connectionInfo">connectionInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference">GoogleGameServicesGameServerClusterConnectionInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference">GoogleGameServicesGameServerClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.connectionInfoInput">connectionInfoInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfo">GoogleGameServicesGameServerClusterConnectionInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.realmIdInput">realmIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts">GoogleGameServicesGameServerClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.realmId">realmId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionInfo`<sup>Required</sup> <a name="connectionInfo" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.connectionInfo"></a>

```java
public GoogleGameServicesGameServerClusterConnectionInfoOutputReference getConnectionInfo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference">GoogleGameServicesGameServerClusterConnectionInfoOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.timeouts"></a>

```java
public GoogleGameServicesGameServerClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference">GoogleGameServicesGameServerClusterTimeoutsOutputReference</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `connectionInfoInput`<sup>Optional</sup> <a name="connectionInfoInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.connectionInfoInput"></a>

```java
public GoogleGameServicesGameServerClusterConnectionInfo getConnectionInfoInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfo">GoogleGameServicesGameServerClusterConnectionInfo</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `realmIdInput`<sup>Optional</sup> <a name="realmIdInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.realmIdInput"></a>

```java
public java.lang.String getRealmIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts">GoogleGameServicesGameServerClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `realmId`<sup>Required</sup> <a name="realmId" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.realmId"></a>

```java
public java.lang.String getRealmId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGameServicesGameServerClusterConfig <a name="GoogleGameServicesGameServerClusterConfig" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_game_services_game_server_cluster.GoogleGameServicesGameServerClusterConfig;

GoogleGameServicesGameServerClusterConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .clusterId(java.lang.String)
    .connectionInfo(GoogleGameServicesGameServerClusterConnectionInfo)
    .realmId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleGameServicesGameServerClusterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Required. The resource name of the game server cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.connectionInfo">connectionInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfo">GoogleGameServicesGameServerClusterConnectionInfo</a></code> | connection_info block. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.realmId">realmId</a></code> | <code>java.lang.String</code> | The realm id of the game server realm. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.description">description</a></code> | <code>java.lang.String</code> | Human readable description of the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_cluster#id GoogleGameServicesGameServerCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels associated with this game server cluster. Each label is a key-value pair. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location of the Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_cluster#project GoogleGameServicesGameServerCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts">GoogleGameServicesGameServerClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Required. The resource name of the game server cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_cluster#cluster_id GoogleGameServicesGameServerCluster#cluster_id}

---

##### `connectionInfo`<sup>Required</sup> <a name="connectionInfo" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.connectionInfo"></a>

```java
public GoogleGameServicesGameServerClusterConnectionInfo getConnectionInfo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfo">GoogleGameServicesGameServerClusterConnectionInfo</a>

connection_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_cluster#connection_info GoogleGameServicesGameServerCluster#connection_info}

---

##### `realmId`<sup>Required</sup> <a name="realmId" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.realmId"></a>

```java
public java.lang.String getRealmId();
```

- *Type:* java.lang.String

The realm id of the game server realm.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_cluster#realm_id GoogleGameServicesGameServerCluster#realm_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human readable description of the cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_cluster#description GoogleGameServicesGameServerCluster#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_cluster#id GoogleGameServicesGameServerCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels associated with this game server cluster. Each label is a key-value pair.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_cluster#labels GoogleGameServicesGameServerCluster#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location of the Cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_cluster#location GoogleGameServicesGameServerCluster#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_cluster#project GoogleGameServicesGameServerCluster#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.timeouts"></a>

```java
public GoogleGameServicesGameServerClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts">GoogleGameServicesGameServerClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_cluster#timeouts GoogleGameServicesGameServerCluster#timeouts}

---

### GoogleGameServicesGameServerClusterConnectionInfo <a name="GoogleGameServicesGameServerClusterConnectionInfo" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_game_services_game_server_cluster.GoogleGameServicesGameServerClusterConnectionInfo;

GoogleGameServicesGameServerClusterConnectionInfo.builder()
    .gkeClusterReference(GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference)
    .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfo.property.gkeClusterReference">gkeClusterReference</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference">GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference</a></code> | gke_cluster_reference block. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfo.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace designated on the game server cluster where the game server instances will be created. |

---

##### `gkeClusterReference`<sup>Required</sup> <a name="gkeClusterReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfo.property.gkeClusterReference"></a>

```java
public GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference getGkeClusterReference();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference">GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference</a>

gke_cluster_reference block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_cluster#gke_cluster_reference GoogleGameServicesGameServerCluster#gke_cluster_reference}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfo.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace designated on the game server cluster where the game server instances will be created.

The namespace existence will be validated
during creation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_cluster#namespace GoogleGameServicesGameServerCluster#namespace}

---

### GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference <a name="GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_game_services_game_server_cluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference;

GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference.builder()
    .cluster(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference.property.cluster">cluster</a></code> | <code>java.lang.String</code> | The full or partial name of a GKE cluster, using one of the following forms:. |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

The full or partial name of a GKE cluster, using one of the following forms:.

'projects/{project_id}/locations/{location}/clusters/{cluster_id}'
'locations/{location}/clusters/{cluster_id}'
'{cluster_id}'

If project and location are not specified, the project and location of the
GameServerCluster resource are used to generate the full name of the
GKE cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_cluster#cluster GoogleGameServicesGameServerCluster#cluster}

---

### GoogleGameServicesGameServerClusterTimeouts <a name="GoogleGameServicesGameServerClusterTimeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_game_services_game_server_cluster.GoogleGameServicesGameServerClusterTimeouts;

GoogleGameServicesGameServerClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_cluster#create GoogleGameServicesGameServerCluster#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_cluster#delete GoogleGameServicesGameServerCluster#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_cluster#update GoogleGameServicesGameServerCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_cluster#create GoogleGameServicesGameServerCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_cluster#delete GoogleGameServicesGameServerCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_game_services_game_server_cluster#update GoogleGameServicesGameServerCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference <a name="GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_game_services_game_server_cluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference;

new GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference">GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.internalValue"></a>

```java
public GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference">GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference</a>

---


### GoogleGameServicesGameServerClusterConnectionInfoOutputReference <a name="GoogleGameServicesGameServerClusterConnectionInfoOutputReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_game_services_game_server_cluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference;

new GoogleGameServicesGameServerClusterConnectionInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.putGkeClusterReference">putGkeClusterReference</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGkeClusterReference` <a name="putGkeClusterReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.putGkeClusterReference"></a>

```java
public void putGkeClusterReference(GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.putGkeClusterReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference">GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.property.gkeClusterReference">gkeClusterReference</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference">GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.property.gkeClusterReferenceInput">gkeClusterReferenceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference">GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfo">GoogleGameServicesGameServerClusterConnectionInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gkeClusterReference`<sup>Required</sup> <a name="gkeClusterReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.property.gkeClusterReference"></a>

```java
public GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference getGkeClusterReference();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference">GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference</a>

---

##### `gkeClusterReferenceInput`<sup>Optional</sup> <a name="gkeClusterReferenceInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.property.gkeClusterReferenceInput"></a>

```java
public GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference getGkeClusterReferenceInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference">GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference</a>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.property.internalValue"></a>

```java
public GoogleGameServicesGameServerClusterConnectionInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfo">GoogleGameServicesGameServerClusterConnectionInfo</a>

---


### GoogleGameServicesGameServerClusterTimeoutsOutputReference <a name="GoogleGameServicesGameServerClusterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_game_services_game_server_cluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference;

new GoogleGameServicesGameServerClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts">GoogleGameServicesGameServerClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts">GoogleGameServicesGameServerClusterTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



