# `google_game_services_game_server_cluster`

Refer to the Terraform Registory for docs: [`google_game_services_game_server_cluster`](https://registry.terraform.io/providers/hashicorp/google-beta/4.79.0/docs/resources/google_game_services_game_server_cluster).

# `googleGameServicesGameServerCluster` Submodule <a name="`googleGameServicesGameServerCluster` Submodule" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGameServicesGameServerCluster <a name="GoogleGameServicesGameServerCluster" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.79.0/docs/resources/google_game_services_game_server_cluster google_game_services_game_server_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer"></a>

```typescript
import { googleGameServicesGameServerCluster } from '@cdktf/provider-google-beta'

new googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster(scope: Construct, id: string, config: GoogleGameServicesGameServerClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig">GoogleGameServicesGameServerClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig">GoogleGameServicesGameServerClusterConfig</a>

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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putConnectionInfo` <a name="putConnectionInfo" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.putConnectionInfo"></a>

```typescript
public putConnectionInfo(value: GoogleGameServicesGameServerClusterConnectionInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.putConnectionInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfo">GoogleGameServicesGameServerClusterConnectionInfo</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleGameServicesGameServerClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts">GoogleGameServicesGameServerClusterTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.isConstruct"></a>

```typescript
import { googleGameServicesGameServerCluster } from '@cdktf/provider-google-beta'

googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.isTerraformElement"></a>

```typescript
import { googleGameServicesGameServerCluster } from '@cdktf/provider-google-beta'

googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.isTerraformResource"></a>

```typescript
import { googleGameServicesGameServerCluster } from '@cdktf/provider-google-beta'

googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.connectionInfo">connectionInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference">GoogleGameServicesGameServerClusterConnectionInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference">GoogleGameServicesGameServerClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.connectionInfoInput">connectionInfoInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfo">GoogleGameServicesGameServerClusterConnectionInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.realmIdInput">realmIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts">GoogleGameServicesGameServerClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.realmId">realmId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionInfo`<sup>Required</sup> <a name="connectionInfo" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.connectionInfo"></a>

```typescript
public readonly connectionInfo: GoogleGameServicesGameServerClusterConnectionInfoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference">GoogleGameServicesGameServerClusterConnectionInfoOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleGameServicesGameServerClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference">GoogleGameServicesGameServerClusterTimeoutsOutputReference</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `connectionInfoInput`<sup>Optional</sup> <a name="connectionInfoInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.connectionInfoInput"></a>

```typescript
public readonly connectionInfoInput: GoogleGameServicesGameServerClusterConnectionInfo;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfo">GoogleGameServicesGameServerClusterConnectionInfo</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `realmIdInput`<sup>Optional</sup> <a name="realmIdInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.realmIdInput"></a>

```typescript
public readonly realmIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleGameServicesGameServerClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts">GoogleGameServicesGameServerClusterTimeouts</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `realmId`<sup>Required</sup> <a name="realmId" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.realmId"></a>

```typescript
public readonly realmId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGameServicesGameServerClusterConfig <a name="GoogleGameServicesGameServerClusterConfig" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.Initializer"></a>

```typescript
import { googleGameServicesGameServerCluster } from '@cdktf/provider-google-beta'

const googleGameServicesGameServerClusterConfig: googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Required. The resource name of the game server cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.connectionInfo">connectionInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfo">GoogleGameServicesGameServerClusterConnectionInfo</a></code> | connection_info block. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.realmId">realmId</a></code> | <code>string</code> | The realm id of the game server realm. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.description">description</a></code> | <code>string</code> | Human readable description of the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.79.0/docs/resources/google_game_services_game_server_cluster#id GoogleGameServicesGameServerCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels associated with this game server cluster. Each label is a key-value pair. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.location">location</a></code> | <code>string</code> | Location of the Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.79.0/docs/resources/google_game_services_game_server_cluster#project GoogleGameServicesGameServerCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts">GoogleGameServicesGameServerClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Required. The resource name of the game server cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.79.0/docs/resources/google_game_services_game_server_cluster#cluster_id GoogleGameServicesGameServerCluster#cluster_id}

---

##### `connectionInfo`<sup>Required</sup> <a name="connectionInfo" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.connectionInfo"></a>

```typescript
public readonly connectionInfo: GoogleGameServicesGameServerClusterConnectionInfo;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfo">GoogleGameServicesGameServerClusterConnectionInfo</a>

connection_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.79.0/docs/resources/google_game_services_game_server_cluster#connection_info GoogleGameServicesGameServerCluster#connection_info}

---

##### `realmId`<sup>Required</sup> <a name="realmId" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.realmId"></a>

```typescript
public readonly realmId: string;
```

- *Type:* string

The realm id of the game server realm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.79.0/docs/resources/google_game_services_game_server_cluster#realm_id GoogleGameServicesGameServerCluster#realm_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human readable description of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.79.0/docs/resources/google_game_services_game_server_cluster#description GoogleGameServicesGameServerCluster#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.79.0/docs/resources/google_game_services_game_server_cluster#id GoogleGameServicesGameServerCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels associated with this game server cluster. Each label is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.79.0/docs/resources/google_game_services_game_server_cluster#labels GoogleGameServicesGameServerCluster#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location of the Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.79.0/docs/resources/google_game_services_game_server_cluster#location GoogleGameServicesGameServerCluster#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.79.0/docs/resources/google_game_services_game_server_cluster#project GoogleGameServicesGameServerCluster#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleGameServicesGameServerClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts">GoogleGameServicesGameServerClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.79.0/docs/resources/google_game_services_game_server_cluster#timeouts GoogleGameServicesGameServerCluster#timeouts}

---

### GoogleGameServicesGameServerClusterConnectionInfo <a name="GoogleGameServicesGameServerClusterConnectionInfo" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfo.Initializer"></a>

```typescript
import { googleGameServicesGameServerCluster } from '@cdktf/provider-google-beta'

const googleGameServicesGameServerClusterConnectionInfo: googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfo.property.gkeClusterReference">gkeClusterReference</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference">GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference</a></code> | gke_cluster_reference block. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfo.property.namespace">namespace</a></code> | <code>string</code> | Namespace designated on the game server cluster where the game server instances will be created. |

---

##### `gkeClusterReference`<sup>Required</sup> <a name="gkeClusterReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfo.property.gkeClusterReference"></a>

```typescript
public readonly gkeClusterReference: GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference">GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference</a>

gke_cluster_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.79.0/docs/resources/google_game_services_game_server_cluster#gke_cluster_reference GoogleGameServicesGameServerCluster#gke_cluster_reference}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfo.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace designated on the game server cluster where the game server instances will be created.

The namespace existence will be validated
during creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.79.0/docs/resources/google_game_services_game_server_cluster#namespace GoogleGameServicesGameServerCluster#namespace}

---

### GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference <a name="GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference.Initializer"></a>

```typescript
import { googleGameServicesGameServerCluster } from '@cdktf/provider-google-beta'

const googleGameServicesGameServerClusterConnectionInfoGkeClusterReference: googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference.property.cluster">cluster</a></code> | <code>string</code> | The full or partial name of a GKE cluster, using one of the following forms:. |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

The full or partial name of a GKE cluster, using one of the following forms:.

'projects/{project_id}/locations/{location}/clusters/{cluster_id}'
'locations/{location}/clusters/{cluster_id}'
'{cluster_id}'

If project and location are not specified, the project and location of the
GameServerCluster resource are used to generate the full name of the
GKE cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.79.0/docs/resources/google_game_services_game_server_cluster#cluster GoogleGameServicesGameServerCluster#cluster}

---

### GoogleGameServicesGameServerClusterTimeouts <a name="GoogleGameServicesGameServerClusterTimeouts" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts.Initializer"></a>

```typescript
import { googleGameServicesGameServerCluster } from '@cdktf/provider-google-beta'

const googleGameServicesGameServerClusterTimeouts: googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.79.0/docs/resources/google_game_services_game_server_cluster#create GoogleGameServicesGameServerCluster#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.79.0/docs/resources/google_game_services_game_server_cluster#delete GoogleGameServicesGameServerCluster#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.79.0/docs/resources/google_game_services_game_server_cluster#update GoogleGameServicesGameServerCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.79.0/docs/resources/google_game_services_game_server_cluster#create GoogleGameServicesGameServerCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.79.0/docs/resources/google_game_services_game_server_cluster#delete GoogleGameServicesGameServerCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.79.0/docs/resources/google_game_services_game_server_cluster#update GoogleGameServicesGameServerCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference <a name="GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.Initializer"></a>

```typescript
import { googleGameServicesGameServerCluster } from '@cdktf/provider-google-beta'

new googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference">GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference">GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference</a>

---


### GoogleGameServicesGameServerClusterConnectionInfoOutputReference <a name="GoogleGameServicesGameServerClusterConnectionInfoOutputReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.Initializer"></a>

```typescript
import { googleGameServicesGameServerCluster } from '@cdktf/provider-google-beta'

new googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGkeClusterReference` <a name="putGkeClusterReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.putGkeClusterReference"></a>

```typescript
public putGkeClusterReference(value: GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.putGkeClusterReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference">GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.property.gkeClusterReference">gkeClusterReference</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference">GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.property.gkeClusterReferenceInput">gkeClusterReferenceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference">GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfo">GoogleGameServicesGameServerClusterConnectionInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gkeClusterReference`<sup>Required</sup> <a name="gkeClusterReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.property.gkeClusterReference"></a>

```typescript
public readonly gkeClusterReference: GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference">GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference</a>

---

##### `gkeClusterReferenceInput`<sup>Optional</sup> <a name="gkeClusterReferenceInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.property.gkeClusterReferenceInput"></a>

```typescript
public readonly gkeClusterReferenceInput: GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference">GoogleGameServicesGameServerClusterConnectionInfoGkeClusterReference</a>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGameServicesGameServerClusterConnectionInfo;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterConnectionInfo">GoogleGameServicesGameServerClusterConnectionInfo</a>

---


### GoogleGameServicesGameServerClusterTimeoutsOutputReference <a name="GoogleGameServicesGameServerClusterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleGameServicesGameServerCluster } from '@cdktf/provider-google-beta'

new googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts">GoogleGameServicesGameServerClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGameServicesGameServerClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleGameServicesGameServerCluster.GoogleGameServicesGameServerClusterTimeouts">GoogleGameServicesGameServerClusterTimeouts</a>

---



