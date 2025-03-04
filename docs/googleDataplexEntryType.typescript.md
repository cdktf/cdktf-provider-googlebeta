# `googleDataplexEntryType` Submodule <a name="`googleDataplexEntryType` Submodule" id="@cdktf/provider-google-beta.googleDataplexEntryType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataplexEntryType <a name="GoogleDataplexEntryType" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_entry_type google_dataplex_entry_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.Initializer"></a>

```typescript
import { googleDataplexEntryType } from '@cdktf/provider-google-beta'

new googleDataplexEntryType.GoogleDataplexEntryType(scope: Construct, id: string, config?: GoogleDataplexEntryTypeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig">GoogleDataplexEntryTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig">GoogleDataplexEntryTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.putRequiredAspects">putRequiredAspects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.resetEntryTypeId">resetEntryTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.resetPlatform">resetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.resetRequiredAspects">resetRequiredAspects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.resetSystemAttribute">resetSystemAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.resetTypeAliases">resetTypeAliases</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRequiredAspects` <a name="putRequiredAspects" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.putRequiredAspects"></a>

```typescript
public putRequiredAspects(value: IResolvable | GoogleDataplexEntryTypeRequiredAspects[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.putRequiredAspects.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspects">GoogleDataplexEntryTypeRequiredAspects</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDataplexEntryTypeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeouts">GoogleDataplexEntryTypeTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEntryTypeId` <a name="resetEntryTypeId" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.resetEntryTypeId"></a>

```typescript
public resetEntryTypeId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetPlatform` <a name="resetPlatform" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.resetPlatform"></a>

```typescript
public resetPlatform(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRequiredAspects` <a name="resetRequiredAspects" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.resetRequiredAspects"></a>

```typescript
public resetRequiredAspects(): void
```

##### `resetSystemAttribute` <a name="resetSystemAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.resetSystemAttribute"></a>

```typescript
public resetSystemAttribute(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTypeAliases` <a name="resetTypeAliases" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.resetTypeAliases"></a>

```typescript
public resetTypeAliases(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataplexEntryType resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.isConstruct"></a>

```typescript
import { googleDataplexEntryType } from '@cdktf/provider-google-beta'

googleDataplexEntryType.GoogleDataplexEntryType.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.isTerraformElement"></a>

```typescript
import { googleDataplexEntryType } from '@cdktf/provider-google-beta'

googleDataplexEntryType.GoogleDataplexEntryType.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.isTerraformResource"></a>

```typescript
import { googleDataplexEntryType } from '@cdktf/provider-google-beta'

googleDataplexEntryType.GoogleDataplexEntryType.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.generateConfigForImport"></a>

```typescript
import { googleDataplexEntryType } from '@cdktf/provider-google-beta'

googleDataplexEntryType.GoogleDataplexEntryType.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDataplexEntryType resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataplexEntryType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataplexEntryType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_entry_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataplexEntryType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.requiredAspects">requiredAspects</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsList">GoogleDataplexEntryTypeRequiredAspectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference">GoogleDataplexEntryTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.entryTypeIdInput">entryTypeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.platformInput">platformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.requiredAspectsInput">requiredAspectsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspects">GoogleDataplexEntryTypeRequiredAspects</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.systemAttributeInput">systemAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeouts">GoogleDataplexEntryTypeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.typeAliasesInput">typeAliasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.entryTypeId">entryTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.systemAttribute">systemAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.typeAliases">typeAliases</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `requiredAspects`<sup>Required</sup> <a name="requiredAspects" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.requiredAspects"></a>

```typescript
public readonly requiredAspects: GoogleDataplexEntryTypeRequiredAspectsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsList">GoogleDataplexEntryTypeRequiredAspectsList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataplexEntryTypeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference">GoogleDataplexEntryTypeTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `entryTypeIdInput`<sup>Optional</sup> <a name="entryTypeIdInput" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.entryTypeIdInput"></a>

```typescript
public readonly entryTypeIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.platformInput"></a>

```typescript
public readonly platformInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `requiredAspectsInput`<sup>Optional</sup> <a name="requiredAspectsInput" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.requiredAspectsInput"></a>

```typescript
public readonly requiredAspectsInput: IResolvable | GoogleDataplexEntryTypeRequiredAspects[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspects">GoogleDataplexEntryTypeRequiredAspects</a>[]

---

##### `systemAttributeInput`<sup>Optional</sup> <a name="systemAttributeInput" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.systemAttributeInput"></a>

```typescript
public readonly systemAttributeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDataplexEntryTypeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeouts">GoogleDataplexEntryTypeTimeouts</a>

---

##### `typeAliasesInput`<sup>Optional</sup> <a name="typeAliasesInput" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.typeAliasesInput"></a>

```typescript
public readonly typeAliasesInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `entryTypeId`<sup>Required</sup> <a name="entryTypeId" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.entryTypeId"></a>

```typescript
public readonly entryTypeId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `systemAttribute`<sup>Required</sup> <a name="systemAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.systemAttribute"></a>

```typescript
public readonly systemAttribute: string;
```

- *Type:* string

---

##### `typeAliases`<sup>Required</sup> <a name="typeAliases" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.typeAliases"></a>

```typescript
public readonly typeAliases: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryType.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataplexEntryTypeConfig <a name="GoogleDataplexEntryTypeConfig" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.Initializer"></a>

```typescript
import { googleDataplexEntryType } from '@cdktf/provider-google-beta'

const googleDataplexEntryTypeConfig: googleDataplexEntryType.GoogleDataplexEntryTypeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.description">description</a></code> | <code>string</code> | Description of the EntryType. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.displayName">displayName</a></code> | <code>string</code> | User friendly display name. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.entryTypeId">entryTypeId</a></code> | <code>string</code> | The entry type id of the entry type. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_entry_type#id GoogleDataplexEntryType#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-defined labels for the EntryType. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.location">location</a></code> | <code>string</code> | The location where entry type will be created in. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.platform">platform</a></code> | <code>string</code> | The platform that Entries of this type belongs to. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_entry_type#project GoogleDataplexEntryType#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.requiredAspects">requiredAspects</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspects">GoogleDataplexEntryTypeRequiredAspects</a>[]</code> | required_aspects block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.systemAttribute">systemAttribute</a></code> | <code>string</code> | The system that Entries of this type belongs to. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeouts">GoogleDataplexEntryTypeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.typeAliases">typeAliases</a></code> | <code>string[]</code> | Indicates the class this Entry Type belongs to, for example, TABLE, DATABASE, MODEL. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the EntryType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_entry_type#description GoogleDataplexEntryType#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_entry_type#display_name GoogleDataplexEntryType#display_name}

---

##### `entryTypeId`<sup>Optional</sup> <a name="entryTypeId" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.entryTypeId"></a>

```typescript
public readonly entryTypeId: string;
```

- *Type:* string

The entry type id of the entry type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_entry_type#entry_type_id GoogleDataplexEntryType#entry_type_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_entry_type#id GoogleDataplexEntryType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined labels for the EntryType.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_entry_type#labels GoogleDataplexEntryType#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location where entry type will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_entry_type#location GoogleDataplexEntryType#location}

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

The platform that Entries of this type belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_entry_type#platform GoogleDataplexEntryType#platform}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_entry_type#project GoogleDataplexEntryType#project}.

---

##### `requiredAspects`<sup>Optional</sup> <a name="requiredAspects" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.requiredAspects"></a>

```typescript
public readonly requiredAspects: IResolvable | GoogleDataplexEntryTypeRequiredAspects[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspects">GoogleDataplexEntryTypeRequiredAspects</a>[]

required_aspects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_entry_type#required_aspects GoogleDataplexEntryType#required_aspects}

---

##### `systemAttribute`<sup>Optional</sup> <a name="systemAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.systemAttribute"></a>

```typescript
public readonly systemAttribute: string;
```

- *Type:* string

The system that Entries of this type belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_entry_type#system GoogleDataplexEntryType#system}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataplexEntryTypeTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeouts">GoogleDataplexEntryTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_entry_type#timeouts GoogleDataplexEntryType#timeouts}

---

##### `typeAliases`<sup>Optional</sup> <a name="typeAliases" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeConfig.property.typeAliases"></a>

```typescript
public readonly typeAliases: string[];
```

- *Type:* string[]

Indicates the class this Entry Type belongs to, for example, TABLE, DATABASE, MODEL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_entry_type#type_aliases GoogleDataplexEntryType#type_aliases}

---

### GoogleDataplexEntryTypeRequiredAspects <a name="GoogleDataplexEntryTypeRequiredAspects" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspects.Initializer"></a>

```typescript
import { googleDataplexEntryType } from '@cdktf/provider-google-beta'

const googleDataplexEntryTypeRequiredAspects: googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspects = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspects.property.type">type</a></code> | <code>string</code> | Required aspect type for the entry type. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspects.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Required aspect type for the entry type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_entry_type#type GoogleDataplexEntryType#type}

---

### GoogleDataplexEntryTypeTimeouts <a name="GoogleDataplexEntryTypeTimeouts" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeouts.Initializer"></a>

```typescript
import { googleDataplexEntryType } from '@cdktf/provider-google-beta'

const googleDataplexEntryTypeTimeouts: googleDataplexEntryType.GoogleDataplexEntryTypeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_entry_type#create GoogleDataplexEntryType#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_entry_type#delete GoogleDataplexEntryType#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_entry_type#update GoogleDataplexEntryType#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_entry_type#create GoogleDataplexEntryType#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_entry_type#delete GoogleDataplexEntryType#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataplex_entry_type#update GoogleDataplexEntryType#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataplexEntryTypeRequiredAspectsList <a name="GoogleDataplexEntryTypeRequiredAspectsList" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsList.Initializer"></a>

```typescript
import { googleDataplexEntryType } from '@cdktf/provider-google-beta'

new googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsList.get"></a>

```typescript
public get(index: number): GoogleDataplexEntryTypeRequiredAspectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspects">GoogleDataplexEntryTypeRequiredAspects</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataplexEntryTypeRequiredAspects[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspects">GoogleDataplexEntryTypeRequiredAspects</a>[]

---


### GoogleDataplexEntryTypeRequiredAspectsOutputReference <a name="GoogleDataplexEntryTypeRequiredAspectsOutputReference" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.Initializer"></a>

```typescript
import { googleDataplexEntryType } from '@cdktf/provider-google-beta'

new googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspects">GoogleDataplexEntryTypeRequiredAspects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspectsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataplexEntryTypeRequiredAspects;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeRequiredAspects">GoogleDataplexEntryTypeRequiredAspects</a>

---


### GoogleDataplexEntryTypeTimeoutsOutputReference <a name="GoogleDataplexEntryTypeTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDataplexEntryType } from '@cdktf/provider-google-beta'

new googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeouts">GoogleDataplexEntryTypeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataplexEntryTypeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataplexEntryType.GoogleDataplexEntryTypeTimeouts">GoogleDataplexEntryTypeTimeouts</a>

---



