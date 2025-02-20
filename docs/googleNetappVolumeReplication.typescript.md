# `googleNetappVolumeReplication` Submodule <a name="`googleNetappVolumeReplication` Submodule" id="@cdktf/provider-google-beta.googleNetappVolumeReplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetappVolumeReplication <a name="GoogleNetappVolumeReplication" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication google_netapp_volume_replication}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer"></a>

```typescript
import { googleNetappVolumeReplication } from '@cdktf/provider-google-beta'

new googleNetappVolumeReplication.GoogleNetappVolumeReplication(scope: Construct, id: string, config: GoogleNetappVolumeReplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig">GoogleNetappVolumeReplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig">GoogleNetappVolumeReplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.putDestinationVolumeParameters">putDestinationVolumeParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetDeleteDestinationVolume">resetDeleteDestinationVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetDestinationVolumeParameters">resetDestinationVolumeParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetForceStopping">resetForceStopping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetReplicationEnabled">resetReplicationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetWaitForMirror">resetWaitForMirror</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinationVolumeParameters` <a name="putDestinationVolumeParameters" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.putDestinationVolumeParameters"></a>

```typescript
public putDestinationVolumeParameters(value: GoogleNetappVolumeReplicationDestinationVolumeParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.putDestinationVolumeParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters">GoogleNetappVolumeReplicationDestinationVolumeParameters</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetappVolumeReplicationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts">GoogleNetappVolumeReplicationTimeouts</a>

---

##### `resetDeleteDestinationVolume` <a name="resetDeleteDestinationVolume" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetDeleteDestinationVolume"></a>

```typescript
public resetDeleteDestinationVolume(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDestinationVolumeParameters` <a name="resetDestinationVolumeParameters" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetDestinationVolumeParameters"></a>

```typescript
public resetDestinationVolumeParameters(): void
```

##### `resetForceStopping` <a name="resetForceStopping" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetForceStopping"></a>

```typescript
public resetForceStopping(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetReplicationEnabled` <a name="resetReplicationEnabled" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetReplicationEnabled"></a>

```typescript
public resetReplicationEnabled(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWaitForMirror` <a name="resetWaitForMirror" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.resetWaitForMirror"></a>

```typescript
public resetWaitForMirror(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetappVolumeReplication resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isConstruct"></a>

```typescript
import { googleNetappVolumeReplication } from '@cdktf/provider-google-beta'

googleNetappVolumeReplication.GoogleNetappVolumeReplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isTerraformElement"></a>

```typescript
import { googleNetappVolumeReplication } from '@cdktf/provider-google-beta'

googleNetappVolumeReplication.GoogleNetappVolumeReplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isTerraformResource"></a>

```typescript
import { googleNetappVolumeReplication } from '@cdktf/provider-google-beta'

googleNetappVolumeReplication.GoogleNetappVolumeReplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.generateConfigForImport"></a>

```typescript
import { googleNetappVolumeReplication } from '@cdktf/provider-google-beta'

googleNetappVolumeReplication.GoogleNetappVolumeReplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleNetappVolumeReplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetappVolumeReplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetappVolumeReplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetappVolumeReplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.destinationVolume">destinationVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.destinationVolumeParameters">destinationVolumeParameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference">GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.healthy">healthy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.mirrorState">mirrorState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.sourceVolume">sourceVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.stateDetails">stateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference">GoogleNetappVolumeReplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.transferStats">transferStats</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList">GoogleNetappVolumeReplicationTransferStatsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.deleteDestinationVolumeInput">deleteDestinationVolumeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.destinationVolumeParametersInput">destinationVolumeParametersInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters">GoogleNetappVolumeReplicationDestinationVolumeParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.forceStoppingInput">forceStoppingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.replicationEnabledInput">replicationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.replicationScheduleInput">replicationScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts">GoogleNetappVolumeReplicationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.volumeNameInput">volumeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.waitForMirrorInput">waitForMirrorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.deleteDestinationVolume">deleteDestinationVolume</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.forceStopping">forceStopping</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.replicationEnabled">replicationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.replicationSchedule">replicationSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.volumeName">volumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.waitForMirror">waitForMirror</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `destinationVolume`<sup>Required</sup> <a name="destinationVolume" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.destinationVolume"></a>

```typescript
public readonly destinationVolume: string;
```

- *Type:* string

---

##### `destinationVolumeParameters`<sup>Required</sup> <a name="destinationVolumeParameters" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.destinationVolumeParameters"></a>

```typescript
public readonly destinationVolumeParameters: GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference">GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `healthy`<sup>Required</sup> <a name="healthy" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.healthy"></a>

```typescript
public readonly healthy: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mirrorState`<sup>Required</sup> <a name="mirrorState" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.mirrorState"></a>

```typescript
public readonly mirrorState: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `sourceVolume`<sup>Required</sup> <a name="sourceVolume" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.sourceVolume"></a>

```typescript
public readonly sourceVolume: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateDetails`<sup>Required</sup> <a name="stateDetails" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.stateDetails"></a>

```typescript
public readonly stateDetails: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetappVolumeReplicationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference">GoogleNetappVolumeReplicationTimeoutsOutputReference</a>

---

##### `transferStats`<sup>Required</sup> <a name="transferStats" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.transferStats"></a>

```typescript
public readonly transferStats: GoogleNetappVolumeReplicationTransferStatsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList">GoogleNetappVolumeReplicationTransferStatsList</a>

---

##### `deleteDestinationVolumeInput`<sup>Optional</sup> <a name="deleteDestinationVolumeInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.deleteDestinationVolumeInput"></a>

```typescript
public readonly deleteDestinationVolumeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationVolumeParametersInput`<sup>Optional</sup> <a name="destinationVolumeParametersInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.destinationVolumeParametersInput"></a>

```typescript
public readonly destinationVolumeParametersInput: GoogleNetappVolumeReplicationDestinationVolumeParameters;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters">GoogleNetappVolumeReplicationDestinationVolumeParameters</a>

---

##### `forceStoppingInput`<sup>Optional</sup> <a name="forceStoppingInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.forceStoppingInput"></a>

```typescript
public readonly forceStoppingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `replicationEnabledInput`<sup>Optional</sup> <a name="replicationEnabledInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.replicationEnabledInput"></a>

```typescript
public readonly replicationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `replicationScheduleInput`<sup>Optional</sup> <a name="replicationScheduleInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.replicationScheduleInput"></a>

```typescript
public readonly replicationScheduleInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetappVolumeReplicationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts">GoogleNetappVolumeReplicationTimeouts</a>

---

##### `volumeNameInput`<sup>Optional</sup> <a name="volumeNameInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.volumeNameInput"></a>

```typescript
public readonly volumeNameInput: string;
```

- *Type:* string

---

##### `waitForMirrorInput`<sup>Optional</sup> <a name="waitForMirrorInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.waitForMirrorInput"></a>

```typescript
public readonly waitForMirrorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deleteDestinationVolume`<sup>Required</sup> <a name="deleteDestinationVolume" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.deleteDestinationVolume"></a>

```typescript
public readonly deleteDestinationVolume: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `forceStopping`<sup>Required</sup> <a name="forceStopping" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.forceStopping"></a>

```typescript
public readonly forceStopping: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `replicationEnabled`<sup>Required</sup> <a name="replicationEnabled" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.replicationEnabled"></a>

```typescript
public readonly replicationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `replicationSchedule`<sup>Required</sup> <a name="replicationSchedule" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.replicationSchedule"></a>

```typescript
public readonly replicationSchedule: string;
```

- *Type:* string

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

---

##### `waitForMirror`<sup>Required</sup> <a name="waitForMirror" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.waitForMirror"></a>

```typescript
public readonly waitForMirror: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetappVolumeReplicationConfig <a name="GoogleNetappVolumeReplicationConfig" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.Initializer"></a>

```typescript
import { googleNetappVolumeReplication } from '@cdktf/provider-google-beta'

const googleNetappVolumeReplicationConfig: googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.location">location</a></code> | <code>string</code> | Name of region for this resource. The resource needs to be created in the region of the destination volume. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.name">name</a></code> | <code>string</code> | The name of the replication. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.replicationSchedule">replicationSchedule</a></code> | <code>string</code> | Specifies the replication interval. Possible values: ["EVERY_10_MINUTES", "HOURLY", "DAILY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.volumeName">volumeName</a></code> | <code>string</code> | The name of the existing source volume. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.deleteDestinationVolume">deleteDestinationVolume</a></code> | <code>boolean \| cdktf.IResolvable</code> | A destination volume is created as part of replication creation. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.description">description</a></code> | <code>string</code> | An description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.destinationVolumeParameters">destinationVolumeParameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters">GoogleNetappVolumeReplicationDestinationVolumeParameters</a></code> | destination_volume_parameters block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.forceStopping">forceStopping</a></code> | <code>boolean \| cdktf.IResolvable</code> | Only replications with mirror_state=MIRRORED can be stopped. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#id GoogleNetappVolumeReplication#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#project GoogleNetappVolumeReplication#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.replicationEnabled">replicationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to false to stop/break the mirror. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts">GoogleNetappVolumeReplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.waitForMirror">waitForMirror</a></code> | <code>boolean \| cdktf.IResolvable</code> | Replication resource state is independent of mirror_state. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Name of region for this resource. The resource needs to be created in the region of the destination volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#location GoogleNetappVolumeReplication#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the replication. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#name GoogleNetappVolumeReplication#name}

---

##### `replicationSchedule`<sup>Required</sup> <a name="replicationSchedule" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.replicationSchedule"></a>

```typescript
public readonly replicationSchedule: string;
```

- *Type:* string

Specifies the replication interval. Possible values: ["EVERY_10_MINUTES", "HOURLY", "DAILY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#replication_schedule GoogleNetappVolumeReplication#replication_schedule}

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

The name of the existing source volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#volume_name GoogleNetappVolumeReplication#volume_name}

---

##### `deleteDestinationVolume`<sup>Optional</sup> <a name="deleteDestinationVolume" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.deleteDestinationVolume"></a>

```typescript
public readonly deleteDestinationVolume: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

A destination volume is created as part of replication creation.

The destination volume will not became
under Terraform management unless you import it manually. If you delete the replication, this volume
will remain.
Setting this parameter to true will delete the *current* destination volume when destroying the
replication. If you reversed the replication direction, this will be your former source volume!
For production use, it is recommended to keep this parameter false to avoid accidental volume
deletion. Handle with care. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#delete_destination_volume GoogleNetappVolumeReplication#delete_destination_volume}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#description GoogleNetappVolumeReplication#description}

---

##### `destinationVolumeParameters`<sup>Optional</sup> <a name="destinationVolumeParameters" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.destinationVolumeParameters"></a>

```typescript
public readonly destinationVolumeParameters: GoogleNetappVolumeReplicationDestinationVolumeParameters;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters">GoogleNetappVolumeReplicationDestinationVolumeParameters</a>

destination_volume_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#destination_volume_parameters GoogleNetappVolumeReplication#destination_volume_parameters}

---

##### `forceStopping`<sup>Optional</sup> <a name="forceStopping" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.forceStopping"></a>

```typescript
public readonly forceStopping: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Only replications with mirror_state=MIRRORED can be stopped.

A replication in mirror_state=TRANSFERRING
currently receives an update and stopping the update might be undesirable. Set this parameter to true
to stop anyway. All data transferred to the destination will be discarded and content of destination
volume will remain at the state of the last successful update. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#force_stopping GoogleNetappVolumeReplication#force_stopping}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#id GoogleNetappVolumeReplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#labels GoogleNetappVolumeReplication#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#project GoogleNetappVolumeReplication#project}.

---

##### `replicationEnabled`<sup>Optional</sup> <a name="replicationEnabled" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.replicationEnabled"></a>

```typescript
public readonly replicationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to false to stop/break the mirror.

Stopping the mirror makes the destination volume read-write
and act independently from the source volume.
Set to true to enable/resume the mirror. WARNING: Resuming a mirror overwrites any changes
done to the destination volume with the content of the source volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#replication_enabled GoogleNetappVolumeReplication#replication_enabled}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetappVolumeReplicationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts">GoogleNetappVolumeReplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#timeouts GoogleNetappVolumeReplication#timeouts}

---

##### `waitForMirror`<sup>Optional</sup> <a name="waitForMirror" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationConfig.property.waitForMirror"></a>

```typescript
public readonly waitForMirror: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Replication resource state is independent of mirror_state.

With enough data, it can take many hours
for mirror_state to reach MIRRORED. If you want Terraform to wait for the mirror to finish on
create/stop/resume operations, set this parameter to true. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#wait_for_mirror GoogleNetappVolumeReplication#wait_for_mirror}

---

### GoogleNetappVolumeReplicationDestinationVolumeParameters <a name="GoogleNetappVolumeReplicationDestinationVolumeParameters" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.Initializer"></a>

```typescript
import { googleNetappVolumeReplication } from '@cdktf/provider-google-beta'

const googleNetappVolumeReplicationDestinationVolumeParameters: googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.property.storagePool">storagePool</a></code> | <code>string</code> | Name of an existing storage pool for the destination volume with format: 'projects/{{project}}/locations/{{location}}/storagePools/{{poolId}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.property.description">description</a></code> | <code>string</code> | Description for the destination volume. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.property.shareName">shareName</a></code> | <code>string</code> | Share name for destination volume. If not specified, name of source volume's share name will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.property.volumeId">volumeId</a></code> | <code>string</code> | Name for the destination volume to be created. |

---

##### `storagePool`<sup>Required</sup> <a name="storagePool" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.property.storagePool"></a>

```typescript
public readonly storagePool: string;
```

- *Type:* string

Name of an existing storage pool for the destination volume with format: 'projects/{{project}}/locations/{{location}}/storagePools/{{poolId}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#storage_pool GoogleNetappVolumeReplication#storage_pool}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description for the destination volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#description GoogleNetappVolumeReplication#description}

---

##### `shareName`<sup>Optional</sup> <a name="shareName" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

Share name for destination volume. If not specified, name of source volume's share name will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#share_name GoogleNetappVolumeReplication#share_name}

---

##### `volumeId`<sup>Optional</sup> <a name="volumeId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

Name for the destination volume to be created.

If not specified, the name of the source volume will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#volume_id GoogleNetappVolumeReplication#volume_id}

---

### GoogleNetappVolumeReplicationTimeouts <a name="GoogleNetappVolumeReplicationTimeouts" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts.Initializer"></a>

```typescript
import { googleNetappVolumeReplication } from '@cdktf/provider-google-beta'

const googleNetappVolumeReplicationTimeouts: googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#create GoogleNetappVolumeReplication#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#delete GoogleNetappVolumeReplication#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#update GoogleNetappVolumeReplication#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#create GoogleNetappVolumeReplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#delete GoogleNetappVolumeReplication#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_netapp_volume_replication#update GoogleNetappVolumeReplication#update}.

---

### GoogleNetappVolumeReplicationTransferStats <a name="GoogleNetappVolumeReplicationTransferStats" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStats"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStats.Initializer"></a>

```typescript
import { googleNetappVolumeReplication } from '@cdktf/provider-google-beta'

const googleNetappVolumeReplicationTransferStats: googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStats = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference <a name="GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer"></a>

```typescript
import { googleNetappVolumeReplication } from '@cdktf/provider-google-beta'

new googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resetShareName">resetShareName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resetVolumeId">resetVolumeId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetShareName` <a name="resetShareName" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resetShareName"></a>

```typescript
public resetShareName(): void
```

##### `resetVolumeId` <a name="resetVolumeId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.resetVolumeId"></a>

```typescript
public resetVolumeId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.shareNameInput">shareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.storagePoolInput">storagePoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.volumeIdInput">volumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.shareName">shareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.storagePool">storagePool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.volumeId">volumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters">GoogleNetappVolumeReplicationDestinationVolumeParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `shareNameInput`<sup>Optional</sup> <a name="shareNameInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.shareNameInput"></a>

```typescript
public readonly shareNameInput: string;
```

- *Type:* string

---

##### `storagePoolInput`<sup>Optional</sup> <a name="storagePoolInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.storagePoolInput"></a>

```typescript
public readonly storagePoolInput: string;
```

- *Type:* string

---

##### `volumeIdInput`<sup>Optional</sup> <a name="volumeIdInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.volumeIdInput"></a>

```typescript
public readonly volumeIdInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.shareName"></a>

```typescript
public readonly shareName: string;
```

- *Type:* string

---

##### `storagePool`<sup>Required</sup> <a name="storagePool" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.storagePool"></a>

```typescript
public readonly storagePool: string;
```

- *Type:* string

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetappVolumeReplicationDestinationVolumeParameters;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationDestinationVolumeParameters">GoogleNetappVolumeReplicationDestinationVolumeParameters</a>

---


### GoogleNetappVolumeReplicationTimeoutsOutputReference <a name="GoogleNetappVolumeReplicationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetappVolumeReplication } from '@cdktf/provider-google-beta'

new googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts">GoogleNetappVolumeReplicationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetappVolumeReplicationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTimeouts">GoogleNetappVolumeReplicationTimeouts</a>

---


### GoogleNetappVolumeReplicationTransferStatsList <a name="GoogleNetappVolumeReplicationTransferStatsList" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.Initializer"></a>

```typescript
import { googleNetappVolumeReplication } from '@cdktf/provider-google-beta'

new googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.get"></a>

```typescript
public get(index: number): GoogleNetappVolumeReplicationTransferStatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleNetappVolumeReplicationTransferStatsOutputReference <a name="GoogleNetappVolumeReplicationTransferStatsOutputReference" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer"></a>

```typescript
import { googleNetappVolumeReplication } from '@cdktf/provider-google-beta'

new googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lagDuration">lagDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lastTransferBytes">lastTransferBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lastTransferDuration">lastTransferDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lastTransferEndTime">lastTransferEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lastTransferError">lastTransferError</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.totalTransferDuration">totalTransferDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.transferBytes">transferBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStats">GoogleNetappVolumeReplicationTransferStats</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lagDuration`<sup>Required</sup> <a name="lagDuration" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lagDuration"></a>

```typescript
public readonly lagDuration: string;
```

- *Type:* string

---

##### `lastTransferBytes`<sup>Required</sup> <a name="lastTransferBytes" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lastTransferBytes"></a>

```typescript
public readonly lastTransferBytes: string;
```

- *Type:* string

---

##### `lastTransferDuration`<sup>Required</sup> <a name="lastTransferDuration" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lastTransferDuration"></a>

```typescript
public readonly lastTransferDuration: string;
```

- *Type:* string

---

##### `lastTransferEndTime`<sup>Required</sup> <a name="lastTransferEndTime" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lastTransferEndTime"></a>

```typescript
public readonly lastTransferEndTime: string;
```

- *Type:* string

---

##### `lastTransferError`<sup>Required</sup> <a name="lastTransferError" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.lastTransferError"></a>

```typescript
public readonly lastTransferError: string;
```

- *Type:* string

---

##### `totalTransferDuration`<sup>Required</sup> <a name="totalTransferDuration" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.totalTransferDuration"></a>

```typescript
public readonly totalTransferDuration: string;
```

- *Type:* string

---

##### `transferBytes`<sup>Required</sup> <a name="transferBytes" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.transferBytes"></a>

```typescript
public readonly transferBytes: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStatsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetappVolumeReplicationTransferStats;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeReplication.GoogleNetappVolumeReplicationTransferStats">GoogleNetappVolumeReplicationTransferStats</a>

---



