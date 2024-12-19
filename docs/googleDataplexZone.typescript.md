# `googleDataplexZone` Submodule <a name="`googleDataplexZone` Submodule" id="@cdktf/provider-google-beta.googleDataplexZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataplexZone <a name="GoogleDataplexZone" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone google_dataplex_zone}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer"></a>

```typescript
import { googleDataplexZone } from '@cdktf/provider-google-beta'

new googleDataplexZone.GoogleDataplexZone(scope: Construct, id: string, config: GoogleDataplexZoneConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig">GoogleDataplexZoneConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig">GoogleDataplexZoneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putDiscoverySpec">putDiscoverySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putResourceSpec">putResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDiscoverySpec` <a name="putDiscoverySpec" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putDiscoverySpec"></a>

```typescript
public putDiscoverySpec(value: GoogleDataplexZoneDiscoverySpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putDiscoverySpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec">GoogleDataplexZoneDiscoverySpec</a>

---

##### `putResourceSpec` <a name="putResourceSpec" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putResourceSpec"></a>

```typescript
public putResourceSpec(value: GoogleDataplexZoneResourceSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec">GoogleDataplexZoneResourceSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDataplexZoneTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts">GoogleDataplexZoneTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataplexZone resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.isConstruct"></a>

```typescript
import { googleDataplexZone } from '@cdktf/provider-google-beta'

googleDataplexZone.GoogleDataplexZone.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.isTerraformElement"></a>

```typescript
import { googleDataplexZone } from '@cdktf/provider-google-beta'

googleDataplexZone.GoogleDataplexZone.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.isTerraformResource"></a>

```typescript
import { googleDataplexZone } from '@cdktf/provider-google-beta'

googleDataplexZone.GoogleDataplexZone.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.generateConfigForImport"></a>

```typescript
import { googleDataplexZone } from '@cdktf/provider-google-beta'

googleDataplexZone.GoogleDataplexZone.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDataplexZone resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataplexZone to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataplexZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataplexZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.assetStatus">assetStatus</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList">GoogleDataplexZoneAssetStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.discoverySpec">discoverySpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference">GoogleDataplexZoneDiscoverySpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.resourceSpec">resourceSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference">GoogleDataplexZoneResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference">GoogleDataplexZoneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.discoverySpecInput">discoverySpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec">GoogleDataplexZoneDiscoverySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.lakeInput">lakeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.resourceSpecInput">resourceSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec">GoogleDataplexZoneResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts">GoogleDataplexZoneTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.lake">lake</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `assetStatus`<sup>Required</sup> <a name="assetStatus" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.assetStatus"></a>

```typescript
public readonly assetStatus: GoogleDataplexZoneAssetStatusList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList">GoogleDataplexZoneAssetStatusList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `discoverySpec`<sup>Required</sup> <a name="discoverySpec" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.discoverySpec"></a>

```typescript
public readonly discoverySpec: GoogleDataplexZoneDiscoverySpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference">GoogleDataplexZoneDiscoverySpecOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `resourceSpec`<sup>Required</sup> <a name="resourceSpec" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.resourceSpec"></a>

```typescript
public readonly resourceSpec: GoogleDataplexZoneResourceSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference">GoogleDataplexZoneResourceSpecOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataplexZoneTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference">GoogleDataplexZoneTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `discoverySpecInput`<sup>Optional</sup> <a name="discoverySpecInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.discoverySpecInput"></a>

```typescript
public readonly discoverySpecInput: GoogleDataplexZoneDiscoverySpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec">GoogleDataplexZoneDiscoverySpec</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `lakeInput`<sup>Optional</sup> <a name="lakeInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.lakeInput"></a>

```typescript
public readonly lakeInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `resourceSpecInput`<sup>Optional</sup> <a name="resourceSpecInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.resourceSpecInput"></a>

```typescript
public readonly resourceSpecInput: GoogleDataplexZoneResourceSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec">GoogleDataplexZoneResourceSpec</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDataplexZoneTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts">GoogleDataplexZoneTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `lake`<sup>Required</sup> <a name="lake" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.lake"></a>

```typescript
public readonly lake: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataplexZoneAssetStatus <a name="GoogleDataplexZoneAssetStatus" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatus.Initializer"></a>

```typescript
import { googleDataplexZone } from '@cdktf/provider-google-beta'

const googleDataplexZoneAssetStatus: googleDataplexZone.GoogleDataplexZoneAssetStatus = { ... }
```


### GoogleDataplexZoneConfig <a name="GoogleDataplexZoneConfig" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.Initializer"></a>

```typescript
import { googleDataplexZone } from '@cdktf/provider-google-beta'

const googleDataplexZoneConfig: googleDataplexZone.GoogleDataplexZoneConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.discoverySpec">discoverySpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec">GoogleDataplexZoneDiscoverySpec</a></code> | discovery_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.lake">lake</a></code> | <code>string</code> | The lake for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.name">name</a></code> | <code>string</code> | The name of the zone. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.resourceSpec">resourceSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec">GoogleDataplexZoneResourceSpec</a></code> | resource_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.type">type</a></code> | <code>string</code> | Required. Immutable. The type of the zone. Possible values: TYPE_UNSPECIFIED, RAW, CURATED. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.description">description</a></code> | <code>string</code> | Optional. Description of the zone. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.displayName">displayName</a></code> | <code>string</code> | Optional. User friendly display name. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#id GoogleDataplexZone#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. User defined labels for the zone. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.project">project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts">GoogleDataplexZoneTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `discoverySpec`<sup>Required</sup> <a name="discoverySpec" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.discoverySpec"></a>

```typescript
public readonly discoverySpec: GoogleDataplexZoneDiscoverySpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec">GoogleDataplexZoneDiscoverySpec</a>

discovery_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#discovery_spec GoogleDataplexZone#discovery_spec}

---

##### `lake`<sup>Required</sup> <a name="lake" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.lake"></a>

```typescript
public readonly lake: string;
```

- *Type:* string

The lake for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#lake GoogleDataplexZone#lake}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#location GoogleDataplexZone#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#name GoogleDataplexZone#name}

---

##### `resourceSpec`<sup>Required</sup> <a name="resourceSpec" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.resourceSpec"></a>

```typescript
public readonly resourceSpec: GoogleDataplexZoneResourceSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec">GoogleDataplexZoneResourceSpec</a>

resource_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#resource_spec GoogleDataplexZone#resource_spec}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Required. Immutable. The type of the zone. Possible values: TYPE_UNSPECIFIED, RAW, CURATED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#type GoogleDataplexZone#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. Description of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#description GoogleDataplexZone#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Optional. User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#display_name GoogleDataplexZone#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#id GoogleDataplexZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. User defined labels for the zone.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#labels GoogleDataplexZone#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#project GoogleDataplexZone#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataplexZoneTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts">GoogleDataplexZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#timeouts GoogleDataplexZone#timeouts}

---

### GoogleDataplexZoneDiscoverySpec <a name="GoogleDataplexZoneDiscoverySpec" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.Initializer"></a>

```typescript
import { googleDataplexZone } from '@cdktf/provider-google-beta'

const googleDataplexZoneDiscoverySpec: googleDataplexZone.GoogleDataplexZoneDiscoverySpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Required. Whether discovery is enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.csvOptions">csvOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions">GoogleDataplexZoneDiscoverySpecCsvOptions</a></code> | csv_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.excludePatterns">excludePatterns</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.includePatterns">includePatterns</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.jsonOptions">jsonOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions">GoogleDataplexZoneDiscoverySpecJsonOptions</a></code> | json_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.schedule">schedule</a></code> | <code>string</code> | Optional. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Required. Whether discovery is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#enabled GoogleDataplexZone#enabled}

---

##### `csvOptions`<sup>Optional</sup> <a name="csvOptions" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.csvOptions"></a>

```typescript
public readonly csvOptions: GoogleDataplexZoneDiscoverySpecCsvOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions">GoogleDataplexZoneDiscoverySpecCsvOptions</a>

csv_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#csv_options GoogleDataplexZone#csv_options}

---

##### `excludePatterns`<sup>Optional</sup> <a name="excludePatterns" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.excludePatterns"></a>

```typescript
public readonly excludePatterns: string[];
```

- *Type:* string[]

Optional.

The list of patterns to apply for selecting data to exclude during discovery. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#exclude_patterns GoogleDataplexZone#exclude_patterns}

---

##### `includePatterns`<sup>Optional</sup> <a name="includePatterns" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.includePatterns"></a>

```typescript
public readonly includePatterns: string[];
```

- *Type:* string[]

Optional.

The list of patterns to apply for selecting data to include during discovery if only a subset of the data should considered. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#include_patterns GoogleDataplexZone#include_patterns}

---

##### `jsonOptions`<sup>Optional</sup> <a name="jsonOptions" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.jsonOptions"></a>

```typescript
public readonly jsonOptions: GoogleDataplexZoneDiscoverySpecJsonOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions">GoogleDataplexZoneDiscoverySpecJsonOptions</a>

json_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#json_options GoogleDataplexZone#json_options}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

Optional.

Cron schedule (https://en.wikipedia.org/wiki/Cron) for running discovery periodically. Successive discovery runs must be scheduled at least 60 minutes apart. The default value is to run discovery every 60 minutes. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, "CRON_TZ=America/New_York 1 * * * *", or "TZ=America/New_York 1 * * * *".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#schedule GoogleDataplexZone#schedule}

---

### GoogleDataplexZoneDiscoverySpecCsvOptions <a name="GoogleDataplexZoneDiscoverySpecCsvOptions" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions.Initializer"></a>

```typescript
import { googleDataplexZone } from '@cdktf/provider-google-beta'

const googleDataplexZoneDiscoverySpecCsvOptions: googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions.property.delimiter">delimiter</a></code> | <code>string</code> | Optional. The delimiter being used to separate values. This defaults to ','. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions.property.disableTypeInference">disableTypeInference</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions.property.encoding">encoding</a></code> | <code>string</code> | Optional. The character encoding of the data. The default is UTF-8. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions.property.headerRows">headerRows</a></code> | <code>number</code> | Optional. The number of rows to interpret as header rows that should be skipped when reading data rows. |

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

Optional. The delimiter being used to separate values. This defaults to ','.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#delimiter GoogleDataplexZone#delimiter}

---

##### `disableTypeInference`<sup>Optional</sup> <a name="disableTypeInference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions.property.disableTypeInference"></a>

```typescript
public readonly disableTypeInference: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional.

Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#disable_type_inference GoogleDataplexZone#disable_type_inference}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

Optional. The character encoding of the data. The default is UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#encoding GoogleDataplexZone#encoding}

---

##### `headerRows`<sup>Optional</sup> <a name="headerRows" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions.property.headerRows"></a>

```typescript
public readonly headerRows: number;
```

- *Type:* number

Optional. The number of rows to interpret as header rows that should be skipped when reading data rows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#header_rows GoogleDataplexZone#header_rows}

---

### GoogleDataplexZoneDiscoverySpecJsonOptions <a name="GoogleDataplexZoneDiscoverySpecJsonOptions" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions.Initializer"></a>

```typescript
import { googleDataplexZone } from '@cdktf/provider-google-beta'

const googleDataplexZoneDiscoverySpecJsonOptions: googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions.property.disableTypeInference">disableTypeInference</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions.property.encoding">encoding</a></code> | <code>string</code> | Optional. The character encoding of the data. The default is UTF-8. |

---

##### `disableTypeInference`<sup>Optional</sup> <a name="disableTypeInference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions.property.disableTypeInference"></a>

```typescript
public readonly disableTypeInference: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional.

Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#disable_type_inference GoogleDataplexZone#disable_type_inference}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

Optional. The character encoding of the data. The default is UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#encoding GoogleDataplexZone#encoding}

---

### GoogleDataplexZoneResourceSpec <a name="GoogleDataplexZoneResourceSpec" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec.Initializer"></a>

```typescript
import { googleDataplexZone } from '@cdktf/provider-google-beta'

const googleDataplexZoneResourceSpec: googleDataplexZone.GoogleDataplexZoneResourceSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec.property.locationType">locationType</a></code> | <code>string</code> | Required. |

---

##### `locationType`<sup>Required</sup> <a name="locationType" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec.property.locationType"></a>

```typescript
public readonly locationType: string;
```

- *Type:* string

Required.

Immutable. The location type of the resources that are allowed to be attached to the assets within this zone. Possible values: LOCATION_TYPE_UNSPECIFIED, SINGLE_REGION, MULTI_REGION

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#location_type GoogleDataplexZone#location_type}

---

### GoogleDataplexZoneTimeouts <a name="GoogleDataplexZoneTimeouts" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts.Initializer"></a>

```typescript
import { googleDataplexZone } from '@cdktf/provider-google-beta'

const googleDataplexZoneTimeouts: googleDataplexZone.GoogleDataplexZoneTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#create GoogleDataplexZone#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#delete GoogleDataplexZone#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#update GoogleDataplexZone#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#create GoogleDataplexZone#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#delete GoogleDataplexZone#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dataplex_zone#update GoogleDataplexZone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataplexZoneAssetStatusList <a name="GoogleDataplexZoneAssetStatusList" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.Initializer"></a>

```typescript
import { googleDataplexZone } from '@cdktf/provider-google-beta'

new googleDataplexZone.GoogleDataplexZoneAssetStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.get"></a>

```typescript
public get(index: number): GoogleDataplexZoneAssetStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleDataplexZoneAssetStatusOutputReference <a name="GoogleDataplexZoneAssetStatusOutputReference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.Initializer"></a>

```typescript
import { googleDataplexZone } from '@cdktf/provider-google-beta'

new googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.activeAssets">activeAssets</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.securityPolicyApplyingAssets">securityPolicyApplyingAssets</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatus">GoogleDataplexZoneAssetStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeAssets`<sup>Required</sup> <a name="activeAssets" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.activeAssets"></a>

```typescript
public readonly activeAssets: number;
```

- *Type:* number

---

##### `securityPolicyApplyingAssets`<sup>Required</sup> <a name="securityPolicyApplyingAssets" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.securityPolicyApplyingAssets"></a>

```typescript
public readonly securityPolicyApplyingAssets: number;
```

- *Type:* number

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexZoneAssetStatus;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatus">GoogleDataplexZoneAssetStatus</a>

---


### GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference <a name="GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.Initializer"></a>

```typescript
import { googleDataplexZone } from '@cdktf/provider-google-beta'

new googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resetDelimiter">resetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resetDisableTypeInference">resetDisableTypeInference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resetHeaderRows">resetHeaderRows</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelimiter` <a name="resetDelimiter" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resetDelimiter"></a>

```typescript
public resetDelimiter(): void
```

##### `resetDisableTypeInference` <a name="resetDisableTypeInference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resetDisableTypeInference"></a>

```typescript
public resetDisableTypeInference(): void
```

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resetEncoding"></a>

```typescript
public resetEncoding(): void
```

##### `resetHeaderRows` <a name="resetHeaderRows" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resetHeaderRows"></a>

```typescript
public resetHeaderRows(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.delimiterInput">delimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.disableTypeInferenceInput">disableTypeInferenceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.encodingInput">encodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.headerRowsInput">headerRowsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.delimiter">delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.disableTypeInference">disableTypeInference</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.headerRows">headerRows</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions">GoogleDataplexZoneDiscoverySpecCsvOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `delimiterInput`<sup>Optional</sup> <a name="delimiterInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.delimiterInput"></a>

```typescript
public readonly delimiterInput: string;
```

- *Type:* string

---

##### `disableTypeInferenceInput`<sup>Optional</sup> <a name="disableTypeInferenceInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.disableTypeInferenceInput"></a>

```typescript
public readonly disableTypeInferenceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* string

---

##### `headerRowsInput`<sup>Optional</sup> <a name="headerRowsInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.headerRowsInput"></a>

```typescript
public readonly headerRowsInput: number;
```

- *Type:* number

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

---

##### `disableTypeInference`<sup>Required</sup> <a name="disableTypeInference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.disableTypeInference"></a>

```typescript
public readonly disableTypeInference: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `headerRows`<sup>Required</sup> <a name="headerRows" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.headerRows"></a>

```typescript
public readonly headerRows: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexZoneDiscoverySpecCsvOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions">GoogleDataplexZoneDiscoverySpecCsvOptions</a>

---


### GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference <a name="GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.Initializer"></a>

```typescript
import { googleDataplexZone } from '@cdktf/provider-google-beta'

new googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.resetDisableTypeInference">resetDisableTypeInference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.resetEncoding">resetEncoding</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableTypeInference` <a name="resetDisableTypeInference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.resetDisableTypeInference"></a>

```typescript
public resetDisableTypeInference(): void
```

##### `resetEncoding` <a name="resetEncoding" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.resetEncoding"></a>

```typescript
public resetEncoding(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.disableTypeInferenceInput">disableTypeInferenceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.encodingInput">encodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.disableTypeInference">disableTypeInference</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.encoding">encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions">GoogleDataplexZoneDiscoverySpecJsonOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disableTypeInferenceInput`<sup>Optional</sup> <a name="disableTypeInferenceInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.disableTypeInferenceInput"></a>

```typescript
public readonly disableTypeInferenceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encodingInput`<sup>Optional</sup> <a name="encodingInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* string

---

##### `disableTypeInference`<sup>Required</sup> <a name="disableTypeInference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.disableTypeInference"></a>

```typescript
public readonly disableTypeInference: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexZoneDiscoverySpecJsonOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions">GoogleDataplexZoneDiscoverySpecJsonOptions</a>

---


### GoogleDataplexZoneDiscoverySpecOutputReference <a name="GoogleDataplexZoneDiscoverySpecOutputReference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.Initializer"></a>

```typescript
import { googleDataplexZone } from '@cdktf/provider-google-beta'

new googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.putCsvOptions">putCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.putJsonOptions">putJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resetCsvOptions">resetCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resetExcludePatterns">resetExcludePatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resetIncludePatterns">resetIncludePatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resetJsonOptions">resetJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCsvOptions` <a name="putCsvOptions" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.putCsvOptions"></a>

```typescript
public putCsvOptions(value: GoogleDataplexZoneDiscoverySpecCsvOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.putCsvOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions">GoogleDataplexZoneDiscoverySpecCsvOptions</a>

---

##### `putJsonOptions` <a name="putJsonOptions" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.putJsonOptions"></a>

```typescript
public putJsonOptions(value: GoogleDataplexZoneDiscoverySpecJsonOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.putJsonOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions">GoogleDataplexZoneDiscoverySpecJsonOptions</a>

---

##### `resetCsvOptions` <a name="resetCsvOptions" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resetCsvOptions"></a>

```typescript
public resetCsvOptions(): void
```

##### `resetExcludePatterns` <a name="resetExcludePatterns" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resetExcludePatterns"></a>

```typescript
public resetExcludePatterns(): void
```

##### `resetIncludePatterns` <a name="resetIncludePatterns" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resetIncludePatterns"></a>

```typescript
public resetIncludePatterns(): void
```

##### `resetJsonOptions` <a name="resetJsonOptions" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resetJsonOptions"></a>

```typescript
public resetJsonOptions(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resetSchedule"></a>

```typescript
public resetSchedule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.csvOptions">csvOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference">GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.jsonOptions">jsonOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference">GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.csvOptionsInput">csvOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions">GoogleDataplexZoneDiscoverySpecCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.excludePatternsInput">excludePatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.includePatternsInput">includePatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.jsonOptionsInput">jsonOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions">GoogleDataplexZoneDiscoverySpecJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.excludePatterns">excludePatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.includePatterns">includePatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec">GoogleDataplexZoneDiscoverySpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `csvOptions`<sup>Required</sup> <a name="csvOptions" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.csvOptions"></a>

```typescript
public readonly csvOptions: GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference">GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference</a>

---

##### `jsonOptions`<sup>Required</sup> <a name="jsonOptions" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.jsonOptions"></a>

```typescript
public readonly jsonOptions: GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference">GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference</a>

---

##### `csvOptionsInput`<sup>Optional</sup> <a name="csvOptionsInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.csvOptionsInput"></a>

```typescript
public readonly csvOptionsInput: GoogleDataplexZoneDiscoverySpecCsvOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions">GoogleDataplexZoneDiscoverySpecCsvOptions</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludePatternsInput`<sup>Optional</sup> <a name="excludePatternsInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.excludePatternsInput"></a>

```typescript
public readonly excludePatternsInput: string[];
```

- *Type:* string[]

---

##### `includePatternsInput`<sup>Optional</sup> <a name="includePatternsInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.includePatternsInput"></a>

```typescript
public readonly includePatternsInput: string[];
```

- *Type:* string[]

---

##### `jsonOptionsInput`<sup>Optional</sup> <a name="jsonOptionsInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.jsonOptionsInput"></a>

```typescript
public readonly jsonOptionsInput: GoogleDataplexZoneDiscoverySpecJsonOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions">GoogleDataplexZoneDiscoverySpecJsonOptions</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludePatterns`<sup>Required</sup> <a name="excludePatterns" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.excludePatterns"></a>

```typescript
public readonly excludePatterns: string[];
```

- *Type:* string[]

---

##### `includePatterns`<sup>Required</sup> <a name="includePatterns" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.includePatterns"></a>

```typescript
public readonly includePatterns: string[];
```

- *Type:* string[]

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexZoneDiscoverySpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec">GoogleDataplexZoneDiscoverySpec</a>

---


### GoogleDataplexZoneResourceSpecOutputReference <a name="GoogleDataplexZoneResourceSpecOutputReference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.Initializer"></a>

```typescript
import { googleDataplexZone } from '@cdktf/provider-google-beta'

new googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.property.locationTypeInput">locationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.property.locationType">locationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec">GoogleDataplexZoneResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locationTypeInput`<sup>Optional</sup> <a name="locationTypeInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.property.locationTypeInput"></a>

```typescript
public readonly locationTypeInput: string;
```

- *Type:* string

---

##### `locationType`<sup>Required</sup> <a name="locationType" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.property.locationType"></a>

```typescript
public readonly locationType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexZoneResourceSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec">GoogleDataplexZoneResourceSpec</a>

---


### GoogleDataplexZoneTimeoutsOutputReference <a name="GoogleDataplexZoneTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDataplexZone } from '@cdktf/provider-google-beta'

new googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts">GoogleDataplexZoneTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataplexZoneTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts">GoogleDataplexZoneTimeouts</a>

---



