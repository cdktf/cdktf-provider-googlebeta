# `googleNetworkServicesTlsRoute` Submodule <a name="`googleNetworkServicesTlsRoute` Submodule" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesTlsRoute <a name="GoogleNetworkServicesTlsRoute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route google_network_services_tls_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_services_tls_route.GoogleNetworkServicesTlsRoute;

GoogleNetworkServicesTlsRoute.Builder.create(Construct scope, java.lang.String id)
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
    .rules(IResolvable)
    .rules(java.util.List<GoogleNetworkServicesTlsRouteRules>)
//  .description(java.lang.String)
//  .gateways(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .meshes(java.util.List<java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkServicesTlsRouteTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the TlsRoute resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRules">GoogleNetworkServicesTlsRouteRules</a>></code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.gateways">gateways</a></code> | <code>java.util.List<java.lang.String></code> | Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#id GoogleNetworkServicesTlsRoute#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.meshes">meshes</a></code> | <code>java.util.List<java.lang.String></code> | Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#project GoogleNetworkServicesTlsRoute#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeouts">GoogleNetworkServicesTlsRouteTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the TlsRoute resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#name GoogleNetworkServicesTlsRoute#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.rules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRules">GoogleNetworkServicesTlsRouteRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#rules GoogleNetworkServicesTlsRoute#rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#description GoogleNetworkServicesTlsRoute#description}

---

##### `gateways`<sup>Optional</sup> <a name="gateways" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.gateways"></a>

- *Type:* java.util.List<java.lang.String>

Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Each gateway reference should match the pattern: projects/* /locations/global/gateways/<gateway_name>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#gateways GoogleNetworkServicesTlsRoute#gateways}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#id GoogleNetworkServicesTlsRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meshes`<sup>Optional</sup> <a name="meshes" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.meshes"></a>

- *Type:* java.util.List<java.lang.String>

Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Each mesh reference should match the pattern: projects/* /locations/global/meshes/<mesh_name>
The attached Mesh should be of a type SIDECAR

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#meshes GoogleNetworkServicesTlsRoute#meshes}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#project GoogleNetworkServicesTlsRoute#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeouts">GoogleNetworkServicesTlsRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#timeouts GoogleNetworkServicesTlsRoute#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.resetGateways">resetGateways</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.resetMeshes">resetMeshes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.putRules"></a>

```java
public void putRules(IResolvable OR java.util.List<GoogleNetworkServicesTlsRouteRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.putRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRules">GoogleNetworkServicesTlsRouteRules</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetworkServicesTlsRouteTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeouts">GoogleNetworkServicesTlsRouteTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGateways` <a name="resetGateways" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.resetGateways"></a>

```java
public void resetGateways()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.resetId"></a>

```java
public void resetId()
```

##### `resetMeshes` <a name="resetMeshes" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.resetMeshes"></a>

```java
public void resetMeshes()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkServicesTlsRoute resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_services_tls_route.GoogleNetworkServicesTlsRoute;

GoogleNetworkServicesTlsRoute.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_services_tls_route.GoogleNetworkServicesTlsRoute;

GoogleNetworkServicesTlsRoute.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_services_tls_route.GoogleNetworkServicesTlsRoute;

GoogleNetworkServicesTlsRoute.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_services_tls_route.GoogleNetworkServicesTlsRoute;

GoogleNetworkServicesTlsRoute.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetworkServicesTlsRoute.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleNetworkServicesTlsRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetworkServicesTlsRoute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetworkServicesTlsRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesTlsRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesList">GoogleNetworkServicesTlsRouteRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference">GoogleNetworkServicesTlsRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.gatewaysInput">gatewaysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.meshesInput">meshesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.rulesInput">rulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRules">GoogleNetworkServicesTlsRouteRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeouts">GoogleNetworkServicesTlsRouteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.gateways">gateways</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.meshes">meshes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.rules"></a>

```java
public GoogleNetworkServicesTlsRouteRulesList getRules();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesList">GoogleNetworkServicesTlsRouteRulesList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.timeouts"></a>

```java
public GoogleNetworkServicesTlsRouteTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference">GoogleNetworkServicesTlsRouteTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `gatewaysInput`<sup>Optional</sup> <a name="gatewaysInput" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.gatewaysInput"></a>

```java
public java.util.List<java.lang.String> getGatewaysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `meshesInput`<sup>Optional</sup> <a name="meshesInput" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.meshesInput"></a>

```java
public java.util.List<java.lang.String> getMeshesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.rulesInput"></a>

```java
public java.lang.Object getRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRules">GoogleNetworkServicesTlsRouteRules</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeouts">GoogleNetworkServicesTlsRouteTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `gateways`<sup>Required</sup> <a name="gateways" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.gateways"></a>

```java
public java.util.List<java.lang.String> getGateways();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `meshes`<sup>Required</sup> <a name="meshes" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.meshes"></a>

```java
public java.util.List<java.lang.String> getMeshes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRoute.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesTlsRouteConfig <a name="GoogleNetworkServicesTlsRouteConfig" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_services_tls_route.GoogleNetworkServicesTlsRouteConfig;

GoogleNetworkServicesTlsRouteConfig.builder()
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
    .rules(IResolvable)
    .rules(java.util.List<GoogleNetworkServicesTlsRouteRules>)
//  .description(java.lang.String)
//  .gateways(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .meshes(java.util.List<java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkServicesTlsRouteTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the TlsRoute resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteConfig.property.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRules">GoogleNetworkServicesTlsRouteRules</a>></code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteConfig.property.description">description</a></code> | <code>java.lang.String</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteConfig.property.gateways">gateways</a></code> | <code>java.util.List<java.lang.String></code> | Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#id GoogleNetworkServicesTlsRoute#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteConfig.property.meshes">meshes</a></code> | <code>java.util.List<java.lang.String></code> | Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#project GoogleNetworkServicesTlsRoute#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeouts">GoogleNetworkServicesTlsRouteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the TlsRoute resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#name GoogleNetworkServicesTlsRoute#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteConfig.property.rules"></a>

```java
public java.lang.Object getRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRules">GoogleNetworkServicesTlsRouteRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#rules GoogleNetworkServicesTlsRoute#rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#description GoogleNetworkServicesTlsRoute#description}

---

##### `gateways`<sup>Optional</sup> <a name="gateways" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteConfig.property.gateways"></a>

```java
public java.util.List<java.lang.String> getGateways();
```

- *Type:* java.util.List<java.lang.String>

Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Each gateway reference should match the pattern: projects/* /locations/global/gateways/<gateway_name>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#gateways GoogleNetworkServicesTlsRoute#gateways}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#id GoogleNetworkServicesTlsRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meshes`<sup>Optional</sup> <a name="meshes" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteConfig.property.meshes"></a>

```java
public java.util.List<java.lang.String> getMeshes();
```

- *Type:* java.util.List<java.lang.String>

Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Each mesh reference should match the pattern: projects/* /locations/global/meshes/<mesh_name>
The attached Mesh should be of a type SIDECAR

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#meshes GoogleNetworkServicesTlsRoute#meshes}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#project GoogleNetworkServicesTlsRoute#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteConfig.property.timeouts"></a>

```java
public GoogleNetworkServicesTlsRouteTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeouts">GoogleNetworkServicesTlsRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#timeouts GoogleNetworkServicesTlsRoute#timeouts}

---

### GoogleNetworkServicesTlsRouteRules <a name="GoogleNetworkServicesTlsRouteRules" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_services_tls_route.GoogleNetworkServicesTlsRouteRules;

GoogleNetworkServicesTlsRouteRules.builder()
    .action(GoogleNetworkServicesTlsRouteRulesAction)
    .matches(IResolvable)
    .matches(java.util.List<GoogleNetworkServicesTlsRouteRulesMatches>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRules.property.action">action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesAction">GoogleNetworkServicesTlsRouteRulesAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRules.property.matches">matches</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatches">GoogleNetworkServicesTlsRouteRulesMatches</a>></code> | matches block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRules.property.action"></a>

```java
public GoogleNetworkServicesTlsRouteRulesAction getAction();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesAction">GoogleNetworkServicesTlsRouteRulesAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#action GoogleNetworkServicesTlsRoute#action}

---

##### `matches`<sup>Required</sup> <a name="matches" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRules.property.matches"></a>

```java
public java.lang.Object getMatches();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatches">GoogleNetworkServicesTlsRouteRulesMatches</a>>

matches block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#matches GoogleNetworkServicesTlsRoute#matches}

---

### GoogleNetworkServicesTlsRouteRulesAction <a name="GoogleNetworkServicesTlsRouteRulesAction" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_services_tls_route.GoogleNetworkServicesTlsRouteRulesAction;

GoogleNetworkServicesTlsRouteRulesAction.builder()
//  .destinations(IResolvable)
//  .destinations(java.util.List<GoogleNetworkServicesTlsRouteRulesActionDestinations>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesAction.property.destinations">destinations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinations">GoogleNetworkServicesTlsRouteRulesActionDestinations</a>></code> | destinations block. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesAction.property.destinations"></a>

```java
public java.lang.Object getDestinations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinations">GoogleNetworkServicesTlsRouteRulesActionDestinations</a>>

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#destinations GoogleNetworkServicesTlsRoute#destinations}

---

### GoogleNetworkServicesTlsRouteRulesActionDestinations <a name="GoogleNetworkServicesTlsRouteRulesActionDestinations" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_services_tls_route.GoogleNetworkServicesTlsRouteRulesActionDestinations;

GoogleNetworkServicesTlsRouteRulesActionDestinations.builder()
//  .serviceName(java.lang.String)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinations.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | The URL of a BackendService to route traffic to. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinations.property.weight">weight</a></code> | <code>java.lang.Number</code> | Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. |

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinations.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

The URL of a BackendService to route traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#service_name GoogleNetworkServicesTlsRoute#service_name}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinations.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Specifies the proportion of requests forwarded to the backend referenced by the serviceName field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#weight GoogleNetworkServicesTlsRoute#weight}

---

### GoogleNetworkServicesTlsRouteRulesMatches <a name="GoogleNetworkServicesTlsRouteRulesMatches" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatches.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_services_tls_route.GoogleNetworkServicesTlsRouteRulesMatches;

GoogleNetworkServicesTlsRouteRulesMatches.builder()
//  .alpn(java.util.List<java.lang.String>)
//  .sniHost(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatches.property.alpn">alpn</a></code> | <code>java.util.List<java.lang.String></code> | ALPN (Application-Layer Protocol Negotiation) to match against. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatches.property.sniHost">sniHost</a></code> | <code>java.util.List<java.lang.String></code> | SNI (server name indicator) to match against. |

---

##### `alpn`<sup>Optional</sup> <a name="alpn" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatches.property.alpn"></a>

```java
public java.util.List<java.lang.String> getAlpn();
```

- *Type:* java.util.List<java.lang.String>

ALPN (Application-Layer Protocol Negotiation) to match against.

Examples: "http/1.1", "h2". At least one of sniHost and alpn is required. Up to 5 alpns across all matches can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#alpn GoogleNetworkServicesTlsRoute#alpn}

---

##### `sniHost`<sup>Optional</sup> <a name="sniHost" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatches.property.sniHost"></a>

```java
public java.util.List<java.lang.String> getSniHost();
```

- *Type:* java.util.List<java.lang.String>

SNI (server name indicator) to match against.

SNI will be matched against all wildcard domains, i.e. www.example.com will be first matched against www.example.com, then *.example.com, then *.com.
Partial wildcards are not supported, and values like *w.example.com are invalid. At least one of sniHost and alpn is required. Up to 5 sni hosts across all matches can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#sni_host GoogleNetworkServicesTlsRoute#sni_host}

---

### GoogleNetworkServicesTlsRouteTimeouts <a name="GoogleNetworkServicesTlsRouteTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_services_tls_route.GoogleNetworkServicesTlsRouteTimeouts;

GoogleNetworkServicesTlsRouteTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#create GoogleNetworkServicesTlsRoute#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#delete GoogleNetworkServicesTlsRoute#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#update GoogleNetworkServicesTlsRoute#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#create GoogleNetworkServicesTlsRoute#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#delete GoogleNetworkServicesTlsRoute#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_network_services_tls_route#update GoogleNetworkServicesTlsRoute#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesTlsRouteRulesActionDestinationsList <a name="GoogleNetworkServicesTlsRouteRulesActionDestinationsList" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_services_tls_route.GoogleNetworkServicesTlsRouteRulesActionDestinationsList;

new GoogleNetworkServicesTlsRouteRulesActionDestinationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsList.get"></a>

```java
public GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinations">GoogleNetworkServicesTlsRouteRulesActionDestinations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinations">GoogleNetworkServicesTlsRouteRulesActionDestinations</a>>

---


### GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference <a name="GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_services_tls_route.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference;

new GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceName` <a name="resetServiceName" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.resetServiceName"></a>

```java
public void resetServiceName()
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.resetWeight"></a>

```java
public void resetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinations">GoogleNetworkServicesTlsRouteRulesActionDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinations">GoogleNetworkServicesTlsRouteRulesActionDestinations</a>

---


### GoogleNetworkServicesTlsRouteRulesActionOutputReference <a name="GoogleNetworkServicesTlsRouteRulesActionOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_services_tls_route.GoogleNetworkServicesTlsRouteRulesActionOutputReference;

new GoogleNetworkServicesTlsRouteRulesActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.resetDestinations">resetDestinations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinations` <a name="putDestinations" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.putDestinations"></a>

```java
public void putDestinations(IResolvable OR java.util.List<GoogleNetworkServicesTlsRouteRulesActionDestinations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.putDestinations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinations">GoogleNetworkServicesTlsRouteRulesActionDestinations</a>>

---

##### `resetDestinations` <a name="resetDestinations" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.resetDestinations"></a>

```java
public void resetDestinations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsList">GoogleNetworkServicesTlsRouteRulesActionDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.property.destinationsInput">destinationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinations">GoogleNetworkServicesTlsRouteRulesActionDestinations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesAction">GoogleNetworkServicesTlsRouteRulesAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.property.destinations"></a>

```java
public GoogleNetworkServicesTlsRouteRulesActionDestinationsList getDestinations();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinationsList">GoogleNetworkServicesTlsRouteRulesActionDestinationsList</a>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.property.destinationsInput"></a>

```java
public java.lang.Object getDestinationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionDestinations">GoogleNetworkServicesTlsRouteRulesActionDestinations</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference.property.internalValue"></a>

```java
public GoogleNetworkServicesTlsRouteRulesAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesAction">GoogleNetworkServicesTlsRouteRulesAction</a>

---


### GoogleNetworkServicesTlsRouteRulesList <a name="GoogleNetworkServicesTlsRouteRulesList" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_services_tls_route.GoogleNetworkServicesTlsRouteRulesList;

new GoogleNetworkServicesTlsRouteRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesList.get"></a>

```java
public GoogleNetworkServicesTlsRouteRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRules">GoogleNetworkServicesTlsRouteRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRules">GoogleNetworkServicesTlsRouteRules</a>>

---


### GoogleNetworkServicesTlsRouteRulesMatchesList <a name="GoogleNetworkServicesTlsRouteRulesMatchesList" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_services_tls_route.GoogleNetworkServicesTlsRouteRulesMatchesList;

new GoogleNetworkServicesTlsRouteRulesMatchesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesList.get"></a>

```java
public GoogleNetworkServicesTlsRouteRulesMatchesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatches">GoogleNetworkServicesTlsRouteRulesMatches</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatches">GoogleNetworkServicesTlsRouteRulesMatches</a>>

---


### GoogleNetworkServicesTlsRouteRulesMatchesOutputReference <a name="GoogleNetworkServicesTlsRouteRulesMatchesOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_services_tls_route.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference;

new GoogleNetworkServicesTlsRouteRulesMatchesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.resetAlpn">resetAlpn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.resetSniHost">resetSniHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlpn` <a name="resetAlpn" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.resetAlpn"></a>

```java
public void resetAlpn()
```

##### `resetSniHost` <a name="resetSniHost" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.resetSniHost"></a>

```java
public void resetSniHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.property.alpnInput">alpnInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.property.sniHostInput">sniHostInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.property.alpn">alpn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.property.sniHost">sniHost</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatches">GoogleNetworkServicesTlsRouteRulesMatches</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alpnInput`<sup>Optional</sup> <a name="alpnInput" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.property.alpnInput"></a>

```java
public java.util.List<java.lang.String> getAlpnInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sniHostInput`<sup>Optional</sup> <a name="sniHostInput" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.property.sniHostInput"></a>

```java
public java.util.List<java.lang.String> getSniHostInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `alpn`<sup>Required</sup> <a name="alpn" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.property.alpn"></a>

```java
public java.util.List<java.lang.String> getAlpn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sniHost`<sup>Required</sup> <a name="sniHost" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.property.sniHost"></a>

```java
public java.util.List<java.lang.String> getSniHost();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatches">GoogleNetworkServicesTlsRouteRulesMatches</a>

---


### GoogleNetworkServicesTlsRouteRulesOutputReference <a name="GoogleNetworkServicesTlsRouteRulesOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_services_tls_route.GoogleNetworkServicesTlsRouteRulesOutputReference;

new GoogleNetworkServicesTlsRouteRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.putMatches">putMatches</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.putAction"></a>

```java
public void putAction(GoogleNetworkServicesTlsRouteRulesAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesAction">GoogleNetworkServicesTlsRouteRulesAction</a>

---

##### `putMatches` <a name="putMatches" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.putMatches"></a>

```java
public void putMatches(IResolvable OR java.util.List<GoogleNetworkServicesTlsRouteRulesMatches> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.putMatches.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatches">GoogleNetworkServicesTlsRouteRulesMatches</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference">GoogleNetworkServicesTlsRouteRulesActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.property.matches">matches</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesList">GoogleNetworkServicesTlsRouteRulesMatchesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesAction">GoogleNetworkServicesTlsRouteRulesAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.property.matchesInput">matchesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatches">GoogleNetworkServicesTlsRouteRulesMatches</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRules">GoogleNetworkServicesTlsRouteRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.property.action"></a>

```java
public GoogleNetworkServicesTlsRouteRulesActionOutputReference getAction();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesActionOutputReference">GoogleNetworkServicesTlsRouteRulesActionOutputReference</a>

---

##### `matches`<sup>Required</sup> <a name="matches" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.property.matches"></a>

```java
public GoogleNetworkServicesTlsRouteRulesMatchesList getMatches();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatchesList">GoogleNetworkServicesTlsRouteRulesMatchesList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.property.actionInput"></a>

```java
public GoogleNetworkServicesTlsRouteRulesAction getActionInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesAction">GoogleNetworkServicesTlsRouteRulesAction</a>

---

##### `matchesInput`<sup>Optional</sup> <a name="matchesInput" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.property.matchesInput"></a>

```java
public java.lang.Object getMatchesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesMatches">GoogleNetworkServicesTlsRouteRulesMatches</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteRules">GoogleNetworkServicesTlsRouteRules</a>

---


### GoogleNetworkServicesTlsRouteTimeoutsOutputReference <a name="GoogleNetworkServicesTlsRouteTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_services_tls_route.GoogleNetworkServicesTlsRouteTimeoutsOutputReference;

new GoogleNetworkServicesTlsRouteTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeouts">GoogleNetworkServicesTlsRouteTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkServicesTlsRoute.GoogleNetworkServicesTlsRouteTimeouts">GoogleNetworkServicesTlsRouteTimeouts</a>

---



