# `googleChronicleWatchlist` Submodule <a name="`googleChronicleWatchlist` Submodule" id="@cdktf/provider-google-beta.googleChronicleWatchlist"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleWatchlist <a name="GoogleChronicleWatchlist" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_chronicle_watchlist google_chronicle_watchlist}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer"></a>

```typescript
import { googleChronicleWatchlist } from '@cdktf/provider-google-beta'

new googleChronicleWatchlist.GoogleChronicleWatchlist(scope: Construct, id: string, config: GoogleChronicleWatchlistConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig">GoogleChronicleWatchlistConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig">GoogleChronicleWatchlistConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putEntityPopulationMechanism">putEntityPopulationMechanism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putWatchlistUserPreferences">putWatchlistUserPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetMultiplyingFactor">resetMultiplyingFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetWatchlistUserPreferences">resetWatchlistUserPreferences</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEntityPopulationMechanism` <a name="putEntityPopulationMechanism" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putEntityPopulationMechanism"></a>

```typescript
public putEntityPopulationMechanism(value: GoogleChronicleWatchlistEntityPopulationMechanism): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putEntityPopulationMechanism.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism">GoogleChronicleWatchlistEntityPopulationMechanism</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleChronicleWatchlistTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts">GoogleChronicleWatchlistTimeouts</a>

---

##### `putWatchlistUserPreferences` <a name="putWatchlistUserPreferences" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putWatchlistUserPreferences"></a>

```typescript
public putWatchlistUserPreferences(value: GoogleChronicleWatchlistWatchlistUserPreferences): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putWatchlistUserPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences">GoogleChronicleWatchlistWatchlistUserPreferences</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMultiplyingFactor` <a name="resetMultiplyingFactor" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetMultiplyingFactor"></a>

```typescript
public resetMultiplyingFactor(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWatchlistUserPreferences` <a name="resetWatchlistUserPreferences" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetWatchlistUserPreferences"></a>

```typescript
public resetWatchlistUserPreferences(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleChronicleWatchlist resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isConstruct"></a>

```typescript
import { googleChronicleWatchlist } from '@cdktf/provider-google-beta'

googleChronicleWatchlist.GoogleChronicleWatchlist.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isTerraformElement"></a>

```typescript
import { googleChronicleWatchlist } from '@cdktf/provider-google-beta'

googleChronicleWatchlist.GoogleChronicleWatchlist.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isTerraformResource"></a>

```typescript
import { googleChronicleWatchlist } from '@cdktf/provider-google-beta'

googleChronicleWatchlist.GoogleChronicleWatchlist.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.generateConfigForImport"></a>

```typescript
import { googleChronicleWatchlist } from '@cdktf/provider-google-beta'

googleChronicleWatchlist.GoogleChronicleWatchlist.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleChronicleWatchlist resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleChronicleWatchlist to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleChronicleWatchlist that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_chronicle_watchlist#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleChronicleWatchlist to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.entityCount">entityCount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList">GoogleChronicleWatchlistEntityCountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.entityPopulationMechanism">entityPopulationMechanism</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference">GoogleChronicleWatchlistEntityPopulationMechanismOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference">GoogleChronicleWatchlistTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.watchlistUserPreferences">watchlistUserPreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference">GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.entityPopulationMechanismInput">entityPopulationMechanismInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism">GoogleChronicleWatchlistEntityPopulationMechanism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.multiplyingFactorInput">multiplyingFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts">GoogleChronicleWatchlistTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.watchlistIdInput">watchlistIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.watchlistUserPreferencesInput">watchlistUserPreferencesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences">GoogleChronicleWatchlistWatchlistUserPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.multiplyingFactor">multiplyingFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.watchlistId">watchlistId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `entityCount`<sup>Required</sup> <a name="entityCount" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.entityCount"></a>

```typescript
public readonly entityCount: GoogleChronicleWatchlistEntityCountList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList">GoogleChronicleWatchlistEntityCountList</a>

---

##### `entityPopulationMechanism`<sup>Required</sup> <a name="entityPopulationMechanism" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.entityPopulationMechanism"></a>

```typescript
public readonly entityPopulationMechanism: GoogleChronicleWatchlistEntityPopulationMechanismOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference">GoogleChronicleWatchlistEntityPopulationMechanismOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleChronicleWatchlistTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference">GoogleChronicleWatchlistTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `watchlistUserPreferences`<sup>Required</sup> <a name="watchlistUserPreferences" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.watchlistUserPreferences"></a>

```typescript
public readonly watchlistUserPreferences: GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference">GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `entityPopulationMechanismInput`<sup>Optional</sup> <a name="entityPopulationMechanismInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.entityPopulationMechanismInput"></a>

```typescript
public readonly entityPopulationMechanismInput: GoogleChronicleWatchlistEntityPopulationMechanism;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism">GoogleChronicleWatchlistEntityPopulationMechanism</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `multiplyingFactorInput`<sup>Optional</sup> <a name="multiplyingFactorInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.multiplyingFactorInput"></a>

```typescript
public readonly multiplyingFactorInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleChronicleWatchlistTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts">GoogleChronicleWatchlistTimeouts</a>

---

##### `watchlistIdInput`<sup>Optional</sup> <a name="watchlistIdInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.watchlistIdInput"></a>

```typescript
public readonly watchlistIdInput: string;
```

- *Type:* string

---

##### `watchlistUserPreferencesInput`<sup>Optional</sup> <a name="watchlistUserPreferencesInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.watchlistUserPreferencesInput"></a>

```typescript
public readonly watchlistUserPreferencesInput: GoogleChronicleWatchlistWatchlistUserPreferences;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences">GoogleChronicleWatchlistWatchlistUserPreferences</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `multiplyingFactor`<sup>Required</sup> <a name="multiplyingFactor" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.multiplyingFactor"></a>

```typescript
public readonly multiplyingFactor: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `watchlistId`<sup>Required</sup> <a name="watchlistId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.watchlistId"></a>

```typescript
public readonly watchlistId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleWatchlistConfig <a name="GoogleChronicleWatchlistConfig" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.Initializer"></a>

```typescript
import { googleChronicleWatchlist } from '@cdktf/provider-google-beta'

const googleChronicleWatchlistConfig: googleChronicleWatchlist.GoogleChronicleWatchlistConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.displayName">displayName</a></code> | <code>string</code> | Required. Display name of the watchlist. Note that it must be at least one character and less than 63 characters (https://google.aip.dev/148). |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.entityPopulationMechanism">entityPopulationMechanism</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism">GoogleChronicleWatchlistEntityPopulationMechanism</a></code> | entity_population_mechanism block. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.instance">instance</a></code> | <code>string</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.location">location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.watchlistId">watchlistId</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.description">description</a></code> | <code>string</code> | Optional. Description of the watchlist. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_chronicle_watchlist#id GoogleChronicleWatchlist#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.multiplyingFactor">multiplyingFactor</a></code> | <code>number</code> | Optional. Weight applied to the risk score for entities in this watchlist. The default is 1.0 if it is not specified. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_chronicle_watchlist#project GoogleChronicleWatchlist#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts">GoogleChronicleWatchlistTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.watchlistUserPreferences">watchlistUserPreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences">GoogleChronicleWatchlistWatchlistUserPreferences</a></code> | watchlist_user_preferences block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Required. Display name of the watchlist. Note that it must be at least one character and less than 63 characters (https://google.aip.dev/148).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_chronicle_watchlist#display_name GoogleChronicleWatchlist#display_name}

---

##### `entityPopulationMechanism`<sup>Required</sup> <a name="entityPopulationMechanism" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.entityPopulationMechanism"></a>

```typescript
public readonly entityPopulationMechanism: GoogleChronicleWatchlistEntityPopulationMechanism;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism">GoogleChronicleWatchlistEntityPopulationMechanism</a>

entity_population_mechanism block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_chronicle_watchlist#entity_population_mechanism GoogleChronicleWatchlist#entity_population_mechanism}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_chronicle_watchlist#instance GoogleChronicleWatchlist#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_chronicle_watchlist#location GoogleChronicleWatchlist#location}

---

##### `watchlistId`<sup>Required</sup> <a name="watchlistId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.watchlistId"></a>

```typescript
public readonly watchlistId: string;
```

- *Type:* string

Optional.

The ID to use for the watchlist,
which will become the final component of the watchlist's resource name.
This value should be 4-63 characters, and valid characters
are /a-z-/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_chronicle_watchlist#watchlist_id GoogleChronicleWatchlist#watchlist_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. Description of the watchlist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_chronicle_watchlist#description GoogleChronicleWatchlist#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_chronicle_watchlist#id GoogleChronicleWatchlist#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multiplyingFactor`<sup>Optional</sup> <a name="multiplyingFactor" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.multiplyingFactor"></a>

```typescript
public readonly multiplyingFactor: number;
```

- *Type:* number

Optional. Weight applied to the risk score for entities in this watchlist. The default is 1.0 if it is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_chronicle_watchlist#multiplying_factor GoogleChronicleWatchlist#multiplying_factor}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_chronicle_watchlist#project GoogleChronicleWatchlist#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleChronicleWatchlistTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts">GoogleChronicleWatchlistTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_chronicle_watchlist#timeouts GoogleChronicleWatchlist#timeouts}

---

##### `watchlistUserPreferences`<sup>Optional</sup> <a name="watchlistUserPreferences" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.watchlistUserPreferences"></a>

```typescript
public readonly watchlistUserPreferences: GoogleChronicleWatchlistWatchlistUserPreferences;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences">GoogleChronicleWatchlistWatchlistUserPreferences</a>

watchlist_user_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_chronicle_watchlist#watchlist_user_preferences GoogleChronicleWatchlist#watchlist_user_preferences}

---

### GoogleChronicleWatchlistEntityCount <a name="GoogleChronicleWatchlistEntityCount" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCount.Initializer"></a>

```typescript
import { googleChronicleWatchlist } from '@cdktf/provider-google-beta'

const googleChronicleWatchlistEntityCount: googleChronicleWatchlist.GoogleChronicleWatchlistEntityCount = { ... }
```


### GoogleChronicleWatchlistEntityPopulationMechanism <a name="GoogleChronicleWatchlistEntityPopulationMechanism" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism.Initializer"></a>

```typescript
import { googleChronicleWatchlist } from '@cdktf/provider-google-beta'

const googleChronicleWatchlistEntityPopulationMechanism: googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism.property.manual">manual</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual">GoogleChronicleWatchlistEntityPopulationMechanismManual</a></code> | manual block. |

---

##### `manual`<sup>Optional</sup> <a name="manual" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism.property.manual"></a>

```typescript
public readonly manual: GoogleChronicleWatchlistEntityPopulationMechanismManual;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual">GoogleChronicleWatchlistEntityPopulationMechanismManual</a>

manual block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_chronicle_watchlist#manual GoogleChronicleWatchlist#manual}

---

### GoogleChronicleWatchlistEntityPopulationMechanismManual <a name="GoogleChronicleWatchlistEntityPopulationMechanismManual" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual.Initializer"></a>

```typescript
import { googleChronicleWatchlist } from '@cdktf/provider-google-beta'

const googleChronicleWatchlistEntityPopulationMechanismManual: googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual = { ... }
```


### GoogleChronicleWatchlistTimeouts <a name="GoogleChronicleWatchlistTimeouts" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts.Initializer"></a>

```typescript
import { googleChronicleWatchlist } from '@cdktf/provider-google-beta'

const googleChronicleWatchlistTimeouts: googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_chronicle_watchlist#create GoogleChronicleWatchlist#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_chronicle_watchlist#delete GoogleChronicleWatchlist#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_chronicle_watchlist#update GoogleChronicleWatchlist#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_chronicle_watchlist#create GoogleChronicleWatchlist#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_chronicle_watchlist#delete GoogleChronicleWatchlist#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_chronicle_watchlist#update GoogleChronicleWatchlist#update}.

---

### GoogleChronicleWatchlistWatchlistUserPreferences <a name="GoogleChronicleWatchlistWatchlistUserPreferences" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences.Initializer"></a>

```typescript
import { googleChronicleWatchlist } from '@cdktf/provider-google-beta'

const googleChronicleWatchlistWatchlistUserPreferences: googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences.property.pinned">pinned</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. Whether the watchlist is pinned on the dashboard. |

---

##### `pinned`<sup>Optional</sup> <a name="pinned" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences.property.pinned"></a>

```typescript
public readonly pinned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional. Whether the watchlist is pinned on the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_chronicle_watchlist#pinned GoogleChronicleWatchlist#pinned}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleWatchlistEntityCountList <a name="GoogleChronicleWatchlistEntityCountList" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.Initializer"></a>

```typescript
import { googleChronicleWatchlist } from '@cdktf/provider-google-beta'

new googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.get"></a>

```typescript
public get(index: number): GoogleChronicleWatchlistEntityCountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleChronicleWatchlistEntityCountOutputReference <a name="GoogleChronicleWatchlistEntityCountOutputReference" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer"></a>

```typescript
import { googleChronicleWatchlist } from '@cdktf/provider-google-beta'

new googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.asset">asset</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.user">user</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCount">GoogleChronicleWatchlistEntityCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `asset`<sup>Required</sup> <a name="asset" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.asset"></a>

```typescript
public readonly asset: number;
```

- *Type:* number

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.user"></a>

```typescript
public readonly user: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleChronicleWatchlistEntityCount;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCount">GoogleChronicleWatchlistEntityCount</a>

---


### GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference <a name="GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer"></a>

```typescript
import { googleChronicleWatchlist } from '@cdktf/provider-google-beta'

new googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual">GoogleChronicleWatchlistEntityPopulationMechanismManual</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleChronicleWatchlistEntityPopulationMechanismManual;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual">GoogleChronicleWatchlistEntityPopulationMechanismManual</a>

---


### GoogleChronicleWatchlistEntityPopulationMechanismOutputReference <a name="GoogleChronicleWatchlistEntityPopulationMechanismOutputReference" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer"></a>

```typescript
import { googleChronicleWatchlist } from '@cdktf/provider-google-beta'

new googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.putManual">putManual</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.resetManual">resetManual</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManual` <a name="putManual" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.putManual"></a>

```typescript
public putManual(value: GoogleChronicleWatchlistEntityPopulationMechanismManual): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.putManual.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual">GoogleChronicleWatchlistEntityPopulationMechanismManual</a>

---

##### `resetManual` <a name="resetManual" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.resetManual"></a>

```typescript
public resetManual(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.manual">manual</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference">GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.manualInput">manualInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual">GoogleChronicleWatchlistEntityPopulationMechanismManual</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism">GoogleChronicleWatchlistEntityPopulationMechanism</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `manual`<sup>Required</sup> <a name="manual" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.manual"></a>

```typescript
public readonly manual: GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference">GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference</a>

---

##### `manualInput`<sup>Optional</sup> <a name="manualInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.manualInput"></a>

```typescript
public readonly manualInput: GoogleChronicleWatchlistEntityPopulationMechanismManual;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual">GoogleChronicleWatchlistEntityPopulationMechanismManual</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleChronicleWatchlistEntityPopulationMechanism;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism">GoogleChronicleWatchlistEntityPopulationMechanism</a>

---


### GoogleChronicleWatchlistTimeoutsOutputReference <a name="GoogleChronicleWatchlistTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleChronicleWatchlist } from '@cdktf/provider-google-beta'

new googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts">GoogleChronicleWatchlistTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleChronicleWatchlistTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts">GoogleChronicleWatchlistTimeouts</a>

---


### GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference <a name="GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer"></a>

```typescript
import { googleChronicleWatchlist } from '@cdktf/provider-google-beta'

new googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.resetPinned">resetPinned</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPinned` <a name="resetPinned" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.resetPinned"></a>

```typescript
public resetPinned(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinnedInput">pinnedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinned">pinned</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences">GoogleChronicleWatchlistWatchlistUserPreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pinnedInput`<sup>Optional</sup> <a name="pinnedInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinnedInput"></a>

```typescript
public readonly pinnedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pinned`<sup>Required</sup> <a name="pinned" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinned"></a>

```typescript
public readonly pinned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleChronicleWatchlistWatchlistUserPreferences;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences">GoogleChronicleWatchlistWatchlistUserPreferences</a>

---



