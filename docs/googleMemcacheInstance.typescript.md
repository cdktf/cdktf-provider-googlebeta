# `googleMemcacheInstance` Submodule <a name="`googleMemcacheInstance` Submodule" id="@cdktf/provider-google-beta.googleMemcacheInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMemcacheInstance <a name="GoogleMemcacheInstance" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance google_memcache_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer"></a>

```typescript
import { googleMemcacheInstance } from '@cdktf/provider-google-beta'

new googleMemcacheInstance.GoogleMemcacheInstance(scope: Construct, id: string, config: GoogleMemcacheInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig">GoogleMemcacheInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig">GoogleMemcacheInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.putMaintenancePolicy">putMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.putMemcacheParameters">putMemcacheParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.putNodeConfig">putNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetAuthorizedNetwork">resetAuthorizedNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetMaintenancePolicy">resetMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetMemcacheParameters">resetMemcacheParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetMemcacheVersion">resetMemcacheVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetReservedIpRangeId">resetReservedIpRangeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetZones">resetZones</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMaintenancePolicy` <a name="putMaintenancePolicy" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.putMaintenancePolicy"></a>

```typescript
public putMaintenancePolicy(value: GoogleMemcacheInstanceMaintenancePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.putMaintenancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicy">GoogleMemcacheInstanceMaintenancePolicy</a>

---

##### `putMemcacheParameters` <a name="putMemcacheParameters" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.putMemcacheParameters"></a>

```typescript
public putMemcacheParameters(value: GoogleMemcacheInstanceMemcacheParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.putMemcacheParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParameters">GoogleMemcacheInstanceMemcacheParameters</a>

---

##### `putNodeConfig` <a name="putNodeConfig" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.putNodeConfig"></a>

```typescript
public putNodeConfig(value: GoogleMemcacheInstanceNodeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.putNodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfig">GoogleMemcacheInstanceNodeConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleMemcacheInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeouts">GoogleMemcacheInstanceTimeouts</a>

---

##### `resetAuthorizedNetwork` <a name="resetAuthorizedNetwork" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetAuthorizedNetwork"></a>

```typescript
public resetAuthorizedNetwork(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMaintenancePolicy` <a name="resetMaintenancePolicy" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetMaintenancePolicy"></a>

```typescript
public resetMaintenancePolicy(): void
```

##### `resetMemcacheParameters` <a name="resetMemcacheParameters" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetMemcacheParameters"></a>

```typescript
public resetMemcacheParameters(): void
```

##### `resetMemcacheVersion` <a name="resetMemcacheVersion" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetMemcacheVersion"></a>

```typescript
public resetMemcacheVersion(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetReservedIpRangeId` <a name="resetReservedIpRangeId" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetReservedIpRangeId"></a>

```typescript
public resetReservedIpRangeId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZones` <a name="resetZones" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.resetZones"></a>

```typescript
public resetZones(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleMemcacheInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.isConstruct"></a>

```typescript
import { googleMemcacheInstance } from '@cdktf/provider-google-beta'

googleMemcacheInstance.GoogleMemcacheInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.isTerraformElement"></a>

```typescript
import { googleMemcacheInstance } from '@cdktf/provider-google-beta'

googleMemcacheInstance.GoogleMemcacheInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.isTerraformResource"></a>

```typescript
import { googleMemcacheInstance } from '@cdktf/provider-google-beta'

googleMemcacheInstance.GoogleMemcacheInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.generateConfigForImport"></a>

```typescript
import { googleMemcacheInstance } from '@cdktf/provider-google-beta'

googleMemcacheInstance.GoogleMemcacheInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleMemcacheInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleMemcacheInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleMemcacheInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleMemcacheInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.discoveryEndpoint">discoveryEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference">GoogleMemcacheInstanceMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.maintenanceSchedule">maintenanceSchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList">GoogleMemcacheInstanceMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.memcacheFullVersion">memcacheFullVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.memcacheNodes">memcacheNodes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList">GoogleMemcacheInstanceMemcacheNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.memcacheParameters">memcacheParameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference">GoogleMemcacheInstanceMemcacheParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference">GoogleMemcacheInstanceNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference">GoogleMemcacheInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.authorizedNetworkInput">authorizedNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.maintenancePolicyInput">maintenancePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicy">GoogleMemcacheInstanceMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.memcacheParametersInput">memcacheParametersInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParameters">GoogleMemcacheInstanceMemcacheParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.memcacheVersionInput">memcacheVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.nodeConfigInput">nodeConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfig">GoogleMemcacheInstanceNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.nodeCountInput">nodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.reservedIpRangeIdInput">reservedIpRangeIdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeouts">GoogleMemcacheInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.zonesInput">zonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.authorizedNetwork">authorizedNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.memcacheVersion">memcacheVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.reservedIpRangeId">reservedIpRangeId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.zones">zones</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `discoveryEndpoint`<sup>Required</sup> <a name="discoveryEndpoint" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.discoveryEndpoint"></a>

```typescript
public readonly discoveryEndpoint: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `maintenancePolicy`<sup>Required</sup> <a name="maintenancePolicy" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.maintenancePolicy"></a>

```typescript
public readonly maintenancePolicy: GoogleMemcacheInstanceMaintenancePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference">GoogleMemcacheInstanceMaintenancePolicyOutputReference</a>

---

##### `maintenanceSchedule`<sup>Required</sup> <a name="maintenanceSchedule" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.maintenanceSchedule"></a>

```typescript
public readonly maintenanceSchedule: GoogleMemcacheInstanceMaintenanceScheduleList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList">GoogleMemcacheInstanceMaintenanceScheduleList</a>

---

##### `memcacheFullVersion`<sup>Required</sup> <a name="memcacheFullVersion" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.memcacheFullVersion"></a>

```typescript
public readonly memcacheFullVersion: string;
```

- *Type:* string

---

##### `memcacheNodes`<sup>Required</sup> <a name="memcacheNodes" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.memcacheNodes"></a>

```typescript
public readonly memcacheNodes: GoogleMemcacheInstanceMemcacheNodesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList">GoogleMemcacheInstanceMemcacheNodesList</a>

---

##### `memcacheParameters`<sup>Required</sup> <a name="memcacheParameters" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.memcacheParameters"></a>

```typescript
public readonly memcacheParameters: GoogleMemcacheInstanceMemcacheParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference">GoogleMemcacheInstanceMemcacheParametersOutputReference</a>

---

##### `nodeConfig`<sup>Required</sup> <a name="nodeConfig" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.nodeConfig"></a>

```typescript
public readonly nodeConfig: GoogleMemcacheInstanceNodeConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference">GoogleMemcacheInstanceNodeConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleMemcacheInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference">GoogleMemcacheInstanceTimeoutsOutputReference</a>

---

##### `authorizedNetworkInput`<sup>Optional</sup> <a name="authorizedNetworkInput" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.authorizedNetworkInput"></a>

```typescript
public readonly authorizedNetworkInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maintenancePolicyInput`<sup>Optional</sup> <a name="maintenancePolicyInput" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.maintenancePolicyInput"></a>

```typescript
public readonly maintenancePolicyInput: GoogleMemcacheInstanceMaintenancePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicy">GoogleMemcacheInstanceMaintenancePolicy</a>

---

##### `memcacheParametersInput`<sup>Optional</sup> <a name="memcacheParametersInput" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.memcacheParametersInput"></a>

```typescript
public readonly memcacheParametersInput: GoogleMemcacheInstanceMemcacheParameters;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParameters">GoogleMemcacheInstanceMemcacheParameters</a>

---

##### `memcacheVersionInput`<sup>Optional</sup> <a name="memcacheVersionInput" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.memcacheVersionInput"></a>

```typescript
public readonly memcacheVersionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodeConfigInput`<sup>Optional</sup> <a name="nodeConfigInput" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.nodeConfigInput"></a>

```typescript
public readonly nodeConfigInput: GoogleMemcacheInstanceNodeConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfig">GoogleMemcacheInstanceNodeConfig</a>

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.nodeCountInput"></a>

```typescript
public readonly nodeCountInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `reservedIpRangeIdInput`<sup>Optional</sup> <a name="reservedIpRangeIdInput" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.reservedIpRangeIdInput"></a>

```typescript
public readonly reservedIpRangeIdInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleMemcacheInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeouts">GoogleMemcacheInstanceTimeouts</a>

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.zonesInput"></a>

```typescript
public readonly zonesInput: string[];
```

- *Type:* string[]

---

##### `authorizedNetwork`<sup>Required</sup> <a name="authorizedNetwork" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.authorizedNetwork"></a>

```typescript
public readonly authorizedNetwork: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `memcacheVersion`<sup>Required</sup> <a name="memcacheVersion" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.memcacheVersion"></a>

```typescript
public readonly memcacheVersion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `reservedIpRangeId`<sup>Required</sup> <a name="reservedIpRangeId" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.reservedIpRangeId"></a>

```typescript
public readonly reservedIpRangeId: string[];
```

- *Type:* string[]

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMemcacheInstanceConfig <a name="GoogleMemcacheInstanceConfig" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.Initializer"></a>

```typescript
import { googleMemcacheInstance } from '@cdktf/provider-google-beta'

const googleMemcacheInstanceConfig: googleMemcacheInstance.GoogleMemcacheInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.name">name</a></code> | <code>string</code> | The resource name of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.nodeConfig">nodeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfig">GoogleMemcacheInstanceNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.nodeCount">nodeCount</a></code> | <code>number</code> | Number of nodes in the memcache instance. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.authorizedNetwork">authorizedNetwork</a></code> | <code>string</code> | The full name of the GCE network to connect the instance to.  If not provided, 'default' will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.displayName">displayName</a></code> | <code>string</code> | A user-visible name for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#id GoogleMemcacheInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicy">GoogleMemcacheInstanceMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.memcacheParameters">memcacheParameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParameters">GoogleMemcacheInstanceMemcacheParameters</a></code> | memcache_parameters block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.memcacheVersion">memcacheVersion</a></code> | <code>string</code> | The major version of Memcached software. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#project GoogleMemcacheInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.region">region</a></code> | <code>string</code> | The region of the Memcache instance. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.reservedIpRangeId">reservedIpRangeId</a></code> | <code>string[]</code> | Contains the name of allocated IP address ranges associated with the private service access connection for example, "test-default" associated with IP range 10.0.0.0/29. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeouts">GoogleMemcacheInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.zones">zones</a></code> | <code>string[]</code> | Zones where memcache nodes should be provisioned.  If not provided, all zones will be used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#name GoogleMemcacheInstance#name}

---

##### `nodeConfig`<sup>Required</sup> <a name="nodeConfig" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.nodeConfig"></a>

```typescript
public readonly nodeConfig: GoogleMemcacheInstanceNodeConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfig">GoogleMemcacheInstanceNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#node_config GoogleMemcacheInstance#node_config}

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

Number of nodes in the memcache instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#node_count GoogleMemcacheInstance#node_count}

---

##### `authorizedNetwork`<sup>Optional</sup> <a name="authorizedNetwork" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.authorizedNetwork"></a>

```typescript
public readonly authorizedNetwork: string;
```

- *Type:* string

The full name of the GCE network to connect the instance to.  If not provided, 'default' will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#authorized_network GoogleMemcacheInstance#authorized_network}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A user-visible name for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#display_name GoogleMemcacheInstance#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#id GoogleMemcacheInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#labels GoogleMemcacheInstance#labels}

---

##### `maintenancePolicy`<sup>Optional</sup> <a name="maintenancePolicy" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.maintenancePolicy"></a>

```typescript
public readonly maintenancePolicy: GoogleMemcacheInstanceMaintenancePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicy">GoogleMemcacheInstanceMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#maintenance_policy GoogleMemcacheInstance#maintenance_policy}

---

##### `memcacheParameters`<sup>Optional</sup> <a name="memcacheParameters" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.memcacheParameters"></a>

```typescript
public readonly memcacheParameters: GoogleMemcacheInstanceMemcacheParameters;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParameters">GoogleMemcacheInstanceMemcacheParameters</a>

memcache_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#memcache_parameters GoogleMemcacheInstance#memcache_parameters}

---

##### `memcacheVersion`<sup>Optional</sup> <a name="memcacheVersion" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.memcacheVersion"></a>

```typescript
public readonly memcacheVersion: string;
```

- *Type:* string

The major version of Memcached software.

If not provided, latest supported version will be used.
Currently the latest supported major version is MEMCACHE_1_5. The minor version will be automatically
determined by our system based on the latest supported minor version. Default value: "MEMCACHE_1_5" Possible values: ["MEMCACHE_1_5", "MEMCACHE_1_6_15"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#memcache_version GoogleMemcacheInstance#memcache_version}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#project GoogleMemcacheInstance#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the Memcache instance. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#region GoogleMemcacheInstance#region}

---

##### `reservedIpRangeId`<sup>Optional</sup> <a name="reservedIpRangeId" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.reservedIpRangeId"></a>

```typescript
public readonly reservedIpRangeId: string[];
```

- *Type:* string[]

Contains the name of allocated IP address ranges associated with the private service access connection for example, "test-default" associated with IP range 10.0.0.0/29.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#reserved_ip_range_id GoogleMemcacheInstance#reserved_ip_range_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleMemcacheInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeouts">GoogleMemcacheInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#timeouts GoogleMemcacheInstance#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceConfig.property.zones"></a>

```typescript
public readonly zones: string[];
```

- *Type:* string[]

Zones where memcache nodes should be provisioned.  If not provided, all zones will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#zones GoogleMemcacheInstance#zones}

---

### GoogleMemcacheInstanceMaintenancePolicy <a name="GoogleMemcacheInstanceMaintenancePolicy" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicy.Initializer"></a>

```typescript
import { googleMemcacheInstance } from '@cdktf/provider-google-beta'

const googleMemcacheInstanceMaintenancePolicy: googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicy.property.weeklyMaintenanceWindow">weeklyMaintenanceWindow</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]</code> | weekly_maintenance_window block. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicy.property.description">description</a></code> | <code>string</code> | Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512. |

---

##### `weeklyMaintenanceWindow`<sup>Required</sup> <a name="weeklyMaintenanceWindow" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicy.property.weeklyMaintenanceWindow"></a>

```typescript
public readonly weeklyMaintenanceWindow: IResolvable | GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]

weekly_maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#weekly_maintenance_window GoogleMemcacheInstance#weekly_maintenance_window}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#description GoogleMemcacheInstance#description}

---

### GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow <a name="GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.Initializer"></a>

```typescript
import { googleMemcacheInstance } from '@cdktf/provider-google-beta'

const googleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow: googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.day">day</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.duration">duration</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | start_time block. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

Required.

The day of week that maintenance updates occur.
- DAY_OF_WEEK_UNSPECIFIED: The day of the week is unspecified.
- MONDAY: Monday
- TUESDAY: Tuesday
- WEDNESDAY: Wednesday
- THURSDAY: Thursday
- FRIDAY: Friday
- SATURDAY: Saturday
- SUNDAY: Sunday Possible values: ["DAY_OF_WEEK_UNSPECIFIED", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#day GoogleMemcacheInstance#day}

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

Required.

The length of the maintenance window, ranging from 3 hours to 8 hours.
A duration in seconds with up to nine fractional digits,
terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#duration GoogleMemcacheInstance#duration}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.property.startTime"></a>

```typescript
public readonly startTime: GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#start_time GoogleMemcacheInstance#start_time}

---

### GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime <a name="GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.Initializer"></a>

```typescript
import { googleMemcacheInstance } from '@cdktf/provider-google-beta'

const googleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime: googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours">hours</a></code> | <code>number</code> | Hours of day in 24 hour format. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes">minutes</a></code> | <code>number</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos">nanos</a></code> | <code>number</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds">seconds</a></code> | <code>number</code> | Seconds of minutes of the time. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

Hours of day in 24 hour format.

Should be from 0 to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#hours GoogleMemcacheInstance#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#minutes GoogleMemcacheInstance#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#nanos GoogleMemcacheInstance#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

Seconds of minutes of the time.

Must normally be from 0 to 59.
An API may allow the value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#seconds GoogleMemcacheInstance#seconds}

---

### GoogleMemcacheInstanceMaintenanceSchedule <a name="GoogleMemcacheInstanceMaintenanceSchedule" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceSchedule.Initializer"></a>

```typescript
import { googleMemcacheInstance } from '@cdktf/provider-google-beta'

const googleMemcacheInstanceMaintenanceSchedule: googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceSchedule = { ... }
```


### GoogleMemcacheInstanceMemcacheNodes <a name="GoogleMemcacheInstanceMemcacheNodes" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodes.Initializer"></a>

```typescript
import { googleMemcacheInstance } from '@cdktf/provider-google-beta'

const googleMemcacheInstanceMemcacheNodes: googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodes = { ... }
```


### GoogleMemcacheInstanceMemcacheParameters <a name="GoogleMemcacheInstanceMemcacheParameters" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParameters.Initializer"></a>

```typescript
import { googleMemcacheInstance } from '@cdktf/provider-google-beta'

const googleMemcacheInstanceMemcacheParameters: googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParameters.property.params">params</a></code> | <code>{[ key: string ]: string}</code> | User-defined set of parameters to use in the memcache process. |

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParameters.property.params"></a>

```typescript
public readonly params: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined set of parameters to use in the memcache process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#params GoogleMemcacheInstance#params}

---

### GoogleMemcacheInstanceNodeConfig <a name="GoogleMemcacheInstanceNodeConfig" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfig.Initializer"></a>

```typescript
import { googleMemcacheInstance } from '@cdktf/provider-google-beta'

const googleMemcacheInstanceNodeConfig: googleMemcacheInstance.GoogleMemcacheInstanceNodeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfig.property.cpuCount">cpuCount</a></code> | <code>number</code> | Number of CPUs per node. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfig.property.memorySizeMb">memorySizeMb</a></code> | <code>number</code> | Memory size in Mebibytes for each memcache node. |

---

##### `cpuCount`<sup>Required</sup> <a name="cpuCount" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfig.property.cpuCount"></a>

```typescript
public readonly cpuCount: number;
```

- *Type:* number

Number of CPUs per node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#cpu_count GoogleMemcacheInstance#cpu_count}

---

##### `memorySizeMb`<sup>Required</sup> <a name="memorySizeMb" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfig.property.memorySizeMb"></a>

```typescript
public readonly memorySizeMb: number;
```

- *Type:* number

Memory size in Mebibytes for each memcache node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#memory_size_mb GoogleMemcacheInstance#memory_size_mb}

---

### GoogleMemcacheInstanceTimeouts <a name="GoogleMemcacheInstanceTimeouts" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeouts.Initializer"></a>

```typescript
import { googleMemcacheInstance } from '@cdktf/provider-google-beta'

const googleMemcacheInstanceTimeouts: googleMemcacheInstance.GoogleMemcacheInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#create GoogleMemcacheInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#delete GoogleMemcacheInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#update GoogleMemcacheInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#create GoogleMemcacheInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#delete GoogleMemcacheInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_memcache_instance#update GoogleMemcacheInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMemcacheInstanceMaintenancePolicyOutputReference <a name="GoogleMemcacheInstanceMaintenancePolicyOutputReference" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.Initializer"></a>

```typescript
import { googleMemcacheInstance } from '@cdktf/provider-google-beta'

new googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow">putWeeklyMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWeeklyMaintenanceWindow` <a name="putWeeklyMaintenanceWindow" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow"></a>

```typescript
public putWeeklyMaintenanceWindow(value: IResolvable | GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindow.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow">weeklyMaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput">weeklyMaintenanceWindowInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicy">GoogleMemcacheInstanceMaintenancePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `weeklyMaintenanceWindow`<sup>Required</sup> <a name="weeklyMaintenanceWindow" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow"></a>

```typescript
public readonly weeklyMaintenanceWindow: GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `weeklyMaintenanceWindowInput`<sup>Optional</sup> <a name="weeklyMaintenanceWindowInput" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowInput"></a>

```typescript
public readonly weeklyMaintenanceWindowInput: IResolvable | GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemcacheInstanceMaintenancePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicy">GoogleMemcacheInstanceMaintenancePolicy</a>

---


### GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList <a name="GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer"></a>

```typescript
import { googleMemcacheInstance } from '@cdktf/provider-google-beta'

new googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get"></a>

```typescript
public get(index: number): GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>[]

---


### GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference <a name="GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { googleMemcacheInstance } from '@cdktf/provider-google-beta'

new googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime">putStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartTime` <a name="putStartTime" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime"></a>

```typescript
public putStartTime(value: GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput">dayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput">startTimeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day">day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime"></a>

```typescript
public readonly startTime: GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference</a>

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>

---


### GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference <a name="GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```typescript
import { googleMemcacheInstance } from '@cdktf/provider-google-beta'

new googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetHours"></a>

```typescript
public resetHours(): void
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetMinutes"></a>

```typescript
public resetMinutes(): void
```

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetNanos"></a>

```typescript
public resetNanos(): void
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resetSeconds"></a>

```typescript
public resetSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds">seconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hoursInput"></a>

```typescript
public readonly hoursInput: number;
```

- *Type:* number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutesInput"></a>

```typescript
public readonly minutesInput: number;
```

- *Type:* number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanosInput"></a>

```typescript
public readonly nanosInput: number;
```

- *Type:* number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.secondsInput"></a>

```typescript
public readonly secondsInput: number;
```

- *Type:* number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds"></a>

```typescript
public readonly seconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">GoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


### GoogleMemcacheInstanceMaintenanceScheduleList <a name="GoogleMemcacheInstanceMaintenanceScheduleList" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.Initializer"></a>

```typescript
import { googleMemcacheInstance } from '@cdktf/provider-google-beta'

new googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.get"></a>

```typescript
public get(index: number): GoogleMemcacheInstanceMaintenanceScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleMemcacheInstanceMaintenanceScheduleOutputReference <a name="GoogleMemcacheInstanceMaintenanceScheduleOutputReference" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer"></a>

```typescript
import { googleMemcacheInstance } from '@cdktf/provider-google-beta'

new googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.scheduleDeadlineTime">scheduleDeadlineTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceSchedule">GoogleMemcacheInstanceMaintenanceSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `scheduleDeadlineTime`<sup>Required</sup> <a name="scheduleDeadlineTime" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.scheduleDeadlineTime"></a>

```typescript
public readonly scheduleDeadlineTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemcacheInstanceMaintenanceSchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMaintenanceSchedule">GoogleMemcacheInstanceMaintenanceSchedule</a>

---


### GoogleMemcacheInstanceMemcacheNodesList <a name="GoogleMemcacheInstanceMemcacheNodesList" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.Initializer"></a>

```typescript
import { googleMemcacheInstance } from '@cdktf/provider-google-beta'

new googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.get"></a>

```typescript
public get(index: number): GoogleMemcacheInstanceMemcacheNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleMemcacheInstanceMemcacheNodesOutputReference <a name="GoogleMemcacheInstanceMemcacheNodesOutputReference" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer"></a>

```typescript
import { googleMemcacheInstance } from '@cdktf/provider-google-beta'

new googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.property.nodeId">nodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodes">GoogleMemcacheInstanceMemcacheNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemcacheInstanceMemcacheNodes;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheNodes">GoogleMemcacheInstanceMemcacheNodes</a>

---


### GoogleMemcacheInstanceMemcacheParametersOutputReference <a name="GoogleMemcacheInstanceMemcacheParametersOutputReference" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.Initializer"></a>

```typescript
import { googleMemcacheInstance } from '@cdktf/provider-google-beta'

new googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.resetParams">resetParams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParams` <a name="resetParams" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.resetParams"></a>

```typescript
public resetParams(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.property.paramsInput">paramsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.property.params">params</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParameters">GoogleMemcacheInstanceMemcacheParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.property.paramsInput"></a>

```typescript
public readonly paramsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.property.params"></a>

```typescript
public readonly params: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemcacheInstanceMemcacheParameters;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceMemcacheParameters">GoogleMemcacheInstanceMemcacheParameters</a>

---


### GoogleMemcacheInstanceNodeConfigOutputReference <a name="GoogleMemcacheInstanceNodeConfigOutputReference" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.Initializer"></a>

```typescript
import { googleMemcacheInstance } from '@cdktf/provider-google-beta'

new googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.property.cpuCountInput">cpuCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.property.memorySizeMbInput">memorySizeMbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.property.cpuCount">cpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.property.memorySizeMb">memorySizeMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfig">GoogleMemcacheInstanceNodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuCountInput`<sup>Optional</sup> <a name="cpuCountInput" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.property.cpuCountInput"></a>

```typescript
public readonly cpuCountInput: number;
```

- *Type:* number

---

##### `memorySizeMbInput`<sup>Optional</sup> <a name="memorySizeMbInput" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.property.memorySizeMbInput"></a>

```typescript
public readonly memorySizeMbInput: number;
```

- *Type:* number

---

##### `cpuCount`<sup>Required</sup> <a name="cpuCount" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.property.cpuCount"></a>

```typescript
public readonly cpuCount: number;
```

- *Type:* number

---

##### `memorySizeMb`<sup>Required</sup> <a name="memorySizeMb" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.property.memorySizeMb"></a>

```typescript
public readonly memorySizeMb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleMemcacheInstanceNodeConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceNodeConfig">GoogleMemcacheInstanceNodeConfig</a>

---


### GoogleMemcacheInstanceTimeoutsOutputReference <a name="GoogleMemcacheInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleMemcacheInstance } from '@cdktf/provider-google-beta'

new googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeouts">GoogleMemcacheInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleMemcacheInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleMemcacheInstance.GoogleMemcacheInstanceTimeouts">GoogleMemcacheInstanceTimeouts</a>

---



