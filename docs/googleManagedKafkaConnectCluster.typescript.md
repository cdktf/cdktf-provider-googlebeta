# `googleManagedKafkaConnectCluster` Submodule <a name="`googleManagedKafkaConnectCluster` Submodule" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleManagedKafkaConnectCluster <a name="GoogleManagedKafkaConnectCluster" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster google_managed_kafka_connect_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.Initializer"></a>

```typescript
import { googleManagedKafkaConnectCluster } from '@cdktf/provider-google-beta'

new googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster(scope: Construct, id: string, config: GoogleManagedKafkaConnectClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig">GoogleManagedKafkaConnectClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig">GoogleManagedKafkaConnectClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.putCapacityConfig">putCapacityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.putGcpConfig">putGcpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCapacityConfig` <a name="putCapacityConfig" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.putCapacityConfig"></a>

```typescript
public putCapacityConfig(value: GoogleManagedKafkaConnectClusterCapacityConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.putCapacityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfig">GoogleManagedKafkaConnectClusterCapacityConfig</a>

---

##### `putGcpConfig` <a name="putGcpConfig" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.putGcpConfig"></a>

```typescript
public putGcpConfig(value: GoogleManagedKafkaConnectClusterGcpConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.putGcpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfig">GoogleManagedKafkaConnectClusterGcpConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleManagedKafkaConnectClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeouts">GoogleManagedKafkaConnectClusterTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleManagedKafkaConnectCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.isConstruct"></a>

```typescript
import { googleManagedKafkaConnectCluster } from '@cdktf/provider-google-beta'

googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.isTerraformElement"></a>

```typescript
import { googleManagedKafkaConnectCluster } from '@cdktf/provider-google-beta'

googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.isTerraformResource"></a>

```typescript
import { googleManagedKafkaConnectCluster } from '@cdktf/provider-google-beta'

googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.generateConfigForImport"></a>

```typescript
import { googleManagedKafkaConnectCluster } from '@cdktf/provider-google-beta'

googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleManagedKafkaConnectCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleManagedKafkaConnectCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleManagedKafkaConnectCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleManagedKafkaConnectCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.capacityConfig">capacityConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference">GoogleManagedKafkaConnectClusterCapacityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.gcpConfig">gcpConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference">GoogleManagedKafkaConnectClusterGcpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference">GoogleManagedKafkaConnectClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.capacityConfigInput">capacityConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfig">GoogleManagedKafkaConnectClusterCapacityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.connectClusterIdInput">connectClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.gcpConfigInput">gcpConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfig">GoogleManagedKafkaConnectClusterGcpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.kafkaClusterInput">kafkaClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeouts">GoogleManagedKafkaConnectClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.connectClusterId">connectClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.kafkaCluster">kafkaCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `capacityConfig`<sup>Required</sup> <a name="capacityConfig" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.capacityConfig"></a>

```typescript
public readonly capacityConfig: GoogleManagedKafkaConnectClusterCapacityConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference">GoogleManagedKafkaConnectClusterCapacityConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `gcpConfig`<sup>Required</sup> <a name="gcpConfig" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.gcpConfig"></a>

```typescript
public readonly gcpConfig: GoogleManagedKafkaConnectClusterGcpConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference">GoogleManagedKafkaConnectClusterGcpConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleManagedKafkaConnectClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference">GoogleManagedKafkaConnectClusterTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `capacityConfigInput`<sup>Optional</sup> <a name="capacityConfigInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.capacityConfigInput"></a>

```typescript
public readonly capacityConfigInput: GoogleManagedKafkaConnectClusterCapacityConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfig">GoogleManagedKafkaConnectClusterCapacityConfig</a>

---

##### `connectClusterIdInput`<sup>Optional</sup> <a name="connectClusterIdInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.connectClusterIdInput"></a>

```typescript
public readonly connectClusterIdInput: string;
```

- *Type:* string

---

##### `gcpConfigInput`<sup>Optional</sup> <a name="gcpConfigInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.gcpConfigInput"></a>

```typescript
public readonly gcpConfigInput: GoogleManagedKafkaConnectClusterGcpConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfig">GoogleManagedKafkaConnectClusterGcpConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kafkaClusterInput`<sup>Optional</sup> <a name="kafkaClusterInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.kafkaClusterInput"></a>

```typescript
public readonly kafkaClusterInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleManagedKafkaConnectClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeouts">GoogleManagedKafkaConnectClusterTimeouts</a>

---

##### `connectClusterId`<sup>Required</sup> <a name="connectClusterId" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.connectClusterId"></a>

```typescript
public readonly connectClusterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kafkaCluster`<sup>Required</sup> <a name="kafkaCluster" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.kafkaCluster"></a>

```typescript
public readonly kafkaCluster: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleManagedKafkaConnectClusterCapacityConfig <a name="GoogleManagedKafkaConnectClusterCapacityConfig" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfig.Initializer"></a>

```typescript
import { googleManagedKafkaConnectCluster } from '@cdktf/provider-google-beta'

const googleManagedKafkaConnectClusterCapacityConfig: googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfig.property.memoryBytes">memoryBytes</a></code> | <code>string</code> | The memory to provision for the cluster in bytes. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfig.property.vcpuCount">vcpuCount</a></code> | <code>string</code> | The number of vCPUs to provision for the cluster. The minimum is 3. |

---

##### `memoryBytes`<sup>Required</sup> <a name="memoryBytes" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfig.property.memoryBytes"></a>

```typescript
public readonly memoryBytes: string;
```

- *Type:* string

The memory to provision for the cluster in bytes.

The CPU:memory ratio (vCPU:GiB) must be between 1:1 and 1:8. Minimum: 3221225472 (3 GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#memory_bytes GoogleManagedKafkaConnectCluster#memory_bytes}

---

##### `vcpuCount`<sup>Required</sup> <a name="vcpuCount" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfig.property.vcpuCount"></a>

```typescript
public readonly vcpuCount: string;
```

- *Type:* string

The number of vCPUs to provision for the cluster. The minimum is 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#vcpu_count GoogleManagedKafkaConnectCluster#vcpu_count}

---

### GoogleManagedKafkaConnectClusterConfig <a name="GoogleManagedKafkaConnectClusterConfig" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.Initializer"></a>

```typescript
import { googleManagedKafkaConnectCluster } from '@cdktf/provider-google-beta'

const googleManagedKafkaConnectClusterConfig: googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.capacityConfig">capacityConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfig">GoogleManagedKafkaConnectClusterCapacityConfig</a></code> | capacity_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.connectClusterId">connectClusterId</a></code> | <code>string</code> | The ID to use for the Connect Cluster, which will become the final component of the connect cluster's name. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.gcpConfig">gcpConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfig">GoogleManagedKafkaConnectClusterGcpConfig</a></code> | gcp_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.kafkaCluster">kafkaCluster</a></code> | <code>string</code> | The name of the Kafka cluster this Kafka Connect cluster is attached to. Structured like: 'projects/PROJECT_ID/locations/LOCATION/clusters/CLUSTER_ID'. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.location">location</a></code> | <code>string</code> | ID of the location of the Kafka Connect resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#id GoogleManagedKafkaConnectCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | List of label KEY=VALUE pairs to add. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#project GoogleManagedKafkaConnectCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeouts">GoogleManagedKafkaConnectClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `capacityConfig`<sup>Required</sup> <a name="capacityConfig" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.capacityConfig"></a>

```typescript
public readonly capacityConfig: GoogleManagedKafkaConnectClusterCapacityConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfig">GoogleManagedKafkaConnectClusterCapacityConfig</a>

capacity_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#capacity_config GoogleManagedKafkaConnectCluster#capacity_config}

---

##### `connectClusterId`<sup>Required</sup> <a name="connectClusterId" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.connectClusterId"></a>

```typescript
public readonly connectClusterId: string;
```

- *Type:* string

The ID to use for the Connect Cluster, which will become the final component of the connect cluster's name.

This value is structured like: 'my-connect-cluster-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#connect_cluster_id GoogleManagedKafkaConnectCluster#connect_cluster_id}

---

##### `gcpConfig`<sup>Required</sup> <a name="gcpConfig" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.gcpConfig"></a>

```typescript
public readonly gcpConfig: GoogleManagedKafkaConnectClusterGcpConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfig">GoogleManagedKafkaConnectClusterGcpConfig</a>

gcp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#gcp_config GoogleManagedKafkaConnectCluster#gcp_config}

---

##### `kafkaCluster`<sup>Required</sup> <a name="kafkaCluster" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.kafkaCluster"></a>

```typescript
public readonly kafkaCluster: string;
```

- *Type:* string

The name of the Kafka cluster this Kafka Connect cluster is attached to. Structured like: 'projects/PROJECT_ID/locations/LOCATION/clusters/CLUSTER_ID'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#kafka_cluster GoogleManagedKafkaConnectCluster#kafka_cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

ID of the location of the Kafka Connect resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#location GoogleManagedKafkaConnectCluster#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#id GoogleManagedKafkaConnectCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

List of label KEY=VALUE pairs to add.

Keys must start with a lowercase character and contain only hyphens (-), underscores ( ), lowercase characters, and numbers. Values must contain only hyphens (-), underscores ( ), lowercase characters, and numbers.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#labels GoogleManagedKafkaConnectCluster#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#project GoogleManagedKafkaConnectCluster#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleManagedKafkaConnectClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeouts">GoogleManagedKafkaConnectClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#timeouts GoogleManagedKafkaConnectCluster#timeouts}

---

### GoogleManagedKafkaConnectClusterGcpConfig <a name="GoogleManagedKafkaConnectClusterGcpConfig" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfig.Initializer"></a>

```typescript
import { googleManagedKafkaConnectCluster } from '@cdktf/provider-google-beta'

const googleManagedKafkaConnectClusterGcpConfig: googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfig.property.accessConfig">accessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfig">GoogleManagedKafkaConnectClusterGcpConfigAccessConfig</a></code> | access_config block. |

---

##### `accessConfig`<sup>Required</sup> <a name="accessConfig" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfig.property.accessConfig"></a>

```typescript
public readonly accessConfig: GoogleManagedKafkaConnectClusterGcpConfigAccessConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfig">GoogleManagedKafkaConnectClusterGcpConfigAccessConfig</a>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#access_config GoogleManagedKafkaConnectCluster#access_config}

---

### GoogleManagedKafkaConnectClusterGcpConfigAccessConfig <a name="GoogleManagedKafkaConnectClusterGcpConfigAccessConfig" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfig.Initializer"></a>

```typescript
import { googleManagedKafkaConnectCluster } from '@cdktf/provider-google-beta'

const googleManagedKafkaConnectClusterGcpConfigAccessConfig: googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfig.property.networkConfigs">networkConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs">GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs</a>[]</code> | network_configs block. |

---

##### `networkConfigs`<sup>Required</sup> <a name="networkConfigs" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfig.property.networkConfigs"></a>

```typescript
public readonly networkConfigs: IResolvable | GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs">GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs</a>[]

network_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#network_configs GoogleManagedKafkaConnectCluster#network_configs}

---

### GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs <a name="GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs.Initializer"></a>

```typescript
import { googleManagedKafkaConnectCluster } from '@cdktf/provider-google-beta'

const googleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs: googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs.property.primarySubnet">primarySubnet</a></code> | <code>string</code> | VPC subnet to make available to the Kafka Connect cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs.property.additionalSubnets">additionalSubnets</a></code> | <code>string[]</code> | Additional subnets may be specified. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs.property.dnsDomainNames">dnsDomainNames</a></code> | <code>string[]</code> | Additional DNS domain names from the subnet's network to be made visible to the Connect Cluster. |

---

##### `primarySubnet`<sup>Required</sup> <a name="primarySubnet" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs.property.primarySubnet"></a>

```typescript
public readonly primarySubnet: string;
```

- *Type:* string

VPC subnet to make available to the Kafka Connect cluster.

Structured like: projects/{project}/regions/{region}/subnetworks/{subnet_id}. It is used to create a Private Service Connect (PSC) interface for the Kafka Connect workers. It must be located in the same region as the Kafka Connect cluster. The CIDR range of the subnet must be within the IPv4 address ranges for private networks, as specified in RFC 1918. The primary subnet CIDR range must have a minimum size of /22 (1024 addresses).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#primary_subnet GoogleManagedKafkaConnectCluster#primary_subnet}

---

##### `additionalSubnets`<sup>Optional</sup> <a name="additionalSubnets" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs.property.additionalSubnets"></a>

```typescript
public readonly additionalSubnets: string[];
```

- *Type:* string[]

Additional subnets may be specified.

They may be in another region, but must be in the same VPC network. The Connect workers can communicate with network endpoints in either the primary or additional subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#additional_subnets GoogleManagedKafkaConnectCluster#additional_subnets}

---

##### `dnsDomainNames`<sup>Optional</sup> <a name="dnsDomainNames" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs.property.dnsDomainNames"></a>

```typescript
public readonly dnsDomainNames: string[];
```

- *Type:* string[]

Additional DNS domain names from the subnet's network to be made visible to the Connect Cluster.

When using MirrorMaker2, it's necessary to add the bootstrap address's dns domain name of the target cluster to make it visible to the connector. For example: my-kafka-cluster.us-central1.managedkafka.my-project.cloud.goog

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#dns_domain_names GoogleManagedKafkaConnectCluster#dns_domain_names}

---

### GoogleManagedKafkaConnectClusterTimeouts <a name="GoogleManagedKafkaConnectClusterTimeouts" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeouts.Initializer"></a>

```typescript
import { googleManagedKafkaConnectCluster } from '@cdktf/provider-google-beta'

const googleManagedKafkaConnectClusterTimeouts: googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#create GoogleManagedKafkaConnectCluster#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#delete GoogleManagedKafkaConnectCluster#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#update GoogleManagedKafkaConnectCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#create GoogleManagedKafkaConnectCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#delete GoogleManagedKafkaConnectCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_managed_kafka_connect_cluster#update GoogleManagedKafkaConnectCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleManagedKafkaConnectClusterCapacityConfigOutputReference <a name="GoogleManagedKafkaConnectClusterCapacityConfigOutputReference" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.Initializer"></a>

```typescript
import { googleManagedKafkaConnectCluster } from '@cdktf/provider-google-beta'

new googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.property.memoryBytesInput">memoryBytesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.property.vcpuCountInput">vcpuCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.property.memoryBytes">memoryBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.property.vcpuCount">vcpuCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfig">GoogleManagedKafkaConnectClusterCapacityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `memoryBytesInput`<sup>Optional</sup> <a name="memoryBytesInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.property.memoryBytesInput"></a>

```typescript
public readonly memoryBytesInput: string;
```

- *Type:* string

---

##### `vcpuCountInput`<sup>Optional</sup> <a name="vcpuCountInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.property.vcpuCountInput"></a>

```typescript
public readonly vcpuCountInput: string;
```

- *Type:* string

---

##### `memoryBytes`<sup>Required</sup> <a name="memoryBytes" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.property.memoryBytes"></a>

```typescript
public readonly memoryBytes: string;
```

- *Type:* string

---

##### `vcpuCount`<sup>Required</sup> <a name="vcpuCount" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.property.vcpuCount"></a>

```typescript
public readonly vcpuCount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleManagedKafkaConnectClusterCapacityConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterCapacityConfig">GoogleManagedKafkaConnectClusterCapacityConfig</a>

---


### GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList <a name="GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.Initializer"></a>

```typescript
import { googleManagedKafkaConnectCluster } from '@cdktf/provider-google-beta'

new googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.get"></a>

```typescript
public get(index: number): GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs">GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs">GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs</a>[]

---


### GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference <a name="GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer"></a>

```typescript
import { googleManagedKafkaConnectCluster } from '@cdktf/provider-google-beta'

new googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resetAdditionalSubnets">resetAdditionalSubnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resetDnsDomainNames">resetDnsDomainNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalSubnets` <a name="resetAdditionalSubnets" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resetAdditionalSubnets"></a>

```typescript
public resetAdditionalSubnets(): void
```

##### `resetDnsDomainNames` <a name="resetDnsDomainNames" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.resetDnsDomainNames"></a>

```typescript
public resetDnsDomainNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.additionalSubnetsInput">additionalSubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.dnsDomainNamesInput">dnsDomainNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.primarySubnetInput">primarySubnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.additionalSubnets">additionalSubnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.dnsDomainNames">dnsDomainNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.primarySubnet">primarySubnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs">GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalSubnetsInput`<sup>Optional</sup> <a name="additionalSubnetsInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.additionalSubnetsInput"></a>

```typescript
public readonly additionalSubnetsInput: string[];
```

- *Type:* string[]

---

##### `dnsDomainNamesInput`<sup>Optional</sup> <a name="dnsDomainNamesInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.dnsDomainNamesInput"></a>

```typescript
public readonly dnsDomainNamesInput: string[];
```

- *Type:* string[]

---

##### `primarySubnetInput`<sup>Optional</sup> <a name="primarySubnetInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.primarySubnetInput"></a>

```typescript
public readonly primarySubnetInput: string;
```

- *Type:* string

---

##### `additionalSubnets`<sup>Required</sup> <a name="additionalSubnets" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.additionalSubnets"></a>

```typescript
public readonly additionalSubnets: string[];
```

- *Type:* string[]

---

##### `dnsDomainNames`<sup>Required</sup> <a name="dnsDomainNames" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.dnsDomainNames"></a>

```typescript
public readonly dnsDomainNames: string[];
```

- *Type:* string[]

---

##### `primarySubnet`<sup>Required</sup> <a name="primarySubnet" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.primarySubnet"></a>

```typescript
public readonly primarySubnet: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs">GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs</a>

---


### GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference <a name="GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.Initializer"></a>

```typescript
import { googleManagedKafkaConnectCluster } from '@cdktf/provider-google-beta'

new googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.putNetworkConfigs">putNetworkConfigs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNetworkConfigs` <a name="putNetworkConfigs" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.putNetworkConfigs"></a>

```typescript
public putNetworkConfigs(value: IResolvable | GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.putNetworkConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs">GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.networkConfigs">networkConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList">GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.networkConfigsInput">networkConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs">GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfig">GoogleManagedKafkaConnectClusterGcpConfigAccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkConfigs`<sup>Required</sup> <a name="networkConfigs" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.networkConfigs"></a>

```typescript
public readonly networkConfigs: GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList">GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigsList</a>

---

##### `networkConfigsInput`<sup>Optional</sup> <a name="networkConfigsInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.networkConfigsInput"></a>

```typescript
public readonly networkConfigsInput: IResolvable | GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs">GoogleManagedKafkaConnectClusterGcpConfigAccessConfigNetworkConfigs</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleManagedKafkaConnectClusterGcpConfigAccessConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfig">GoogleManagedKafkaConnectClusterGcpConfigAccessConfig</a>

---


### GoogleManagedKafkaConnectClusterGcpConfigOutputReference <a name="GoogleManagedKafkaConnectClusterGcpConfigOutputReference" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.Initializer"></a>

```typescript
import { googleManagedKafkaConnectCluster } from '@cdktf/provider-google-beta'

new googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.putAccessConfig">putAccessConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessConfig` <a name="putAccessConfig" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.putAccessConfig"></a>

```typescript
public putAccessConfig(value: GoogleManagedKafkaConnectClusterGcpConfigAccessConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.putAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfig">GoogleManagedKafkaConnectClusterGcpConfigAccessConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.property.accessConfig">accessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference">GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.property.accessConfigInput">accessConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfig">GoogleManagedKafkaConnectClusterGcpConfigAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfig">GoogleManagedKafkaConnectClusterGcpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessConfig`<sup>Required</sup> <a name="accessConfig" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.property.accessConfig"></a>

```typescript
public readonly accessConfig: GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference">GoogleManagedKafkaConnectClusterGcpConfigAccessConfigOutputReference</a>

---

##### `accessConfigInput`<sup>Optional</sup> <a name="accessConfigInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.property.accessConfigInput"></a>

```typescript
public readonly accessConfigInput: GoogleManagedKafkaConnectClusterGcpConfigAccessConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigAccessConfig">GoogleManagedKafkaConnectClusterGcpConfigAccessConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleManagedKafkaConnectClusterGcpConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterGcpConfig">GoogleManagedKafkaConnectClusterGcpConfig</a>

---


### GoogleManagedKafkaConnectClusterTimeoutsOutputReference <a name="GoogleManagedKafkaConnectClusterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleManagedKafkaConnectCluster } from '@cdktf/provider-google-beta'

new googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeouts">GoogleManagedKafkaConnectClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleManagedKafkaConnectClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleManagedKafkaConnectCluster.GoogleManagedKafkaConnectClusterTimeouts">GoogleManagedKafkaConnectClusterTimeouts</a>

---



