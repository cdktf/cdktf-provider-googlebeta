# `googleChronicleReferenceList` Submodule <a name="`googleChronicleReferenceList` Submodule" id="@cdktf/provider-google-beta.googleChronicleReferenceList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleReferenceList <a name="GoogleChronicleReferenceList" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_chronicle_reference_list google_chronicle_reference_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.Initializer"></a>

```typescript
import { googleChronicleReferenceList } from '@cdktf/provider-google-beta'

new googleChronicleReferenceList.GoogleChronicleReferenceList(scope: Construct, id: string, config: GoogleChronicleReferenceListConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig">GoogleChronicleReferenceListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig">GoogleChronicleReferenceListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.putEntries">putEntries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEntries` <a name="putEntries" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.putEntries"></a>

```typescript
public putEntries(value: IResolvable | GoogleChronicleReferenceListEntries[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.putEntries.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntries">GoogleChronicleReferenceListEntries</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleChronicleReferenceListTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeouts">GoogleChronicleReferenceListTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleChronicleReferenceList resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.isConstruct"></a>

```typescript
import { googleChronicleReferenceList } from '@cdktf/provider-google-beta'

googleChronicleReferenceList.GoogleChronicleReferenceList.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.isTerraformElement"></a>

```typescript
import { googleChronicleReferenceList } from '@cdktf/provider-google-beta'

googleChronicleReferenceList.GoogleChronicleReferenceList.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.isTerraformResource"></a>

```typescript
import { googleChronicleReferenceList } from '@cdktf/provider-google-beta'

googleChronicleReferenceList.GoogleChronicleReferenceList.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.generateConfigForImport"></a>

```typescript
import { googleChronicleReferenceList } from '@cdktf/provider-google-beta'

googleChronicleReferenceList.GoogleChronicleReferenceList.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleChronicleReferenceList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleChronicleReferenceList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleChronicleReferenceList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_chronicle_reference_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleChronicleReferenceList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.entries">entries</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList">GoogleChronicleReferenceListEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.revisionCreateTime">revisionCreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.ruleAssociationsCount">ruleAssociationsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.rules">rules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.scopeInfo">scopeInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList">GoogleChronicleReferenceListScopeInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference">GoogleChronicleReferenceListTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.entriesInput">entriesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntries">GoogleChronicleReferenceListEntries</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.referenceListIdInput">referenceListIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.syntaxTypeInput">syntaxTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeouts">GoogleChronicleReferenceListTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.referenceListId">referenceListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.syntaxType">syntaxType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.entries"></a>

```typescript
public readonly entries: GoogleChronicleReferenceListEntriesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList">GoogleChronicleReferenceListEntriesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `revisionCreateTime`<sup>Required</sup> <a name="revisionCreateTime" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.revisionCreateTime"></a>

```typescript
public readonly revisionCreateTime: string;
```

- *Type:* string

---

##### `ruleAssociationsCount`<sup>Required</sup> <a name="ruleAssociationsCount" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.ruleAssociationsCount"></a>

```typescript
public readonly ruleAssociationsCount: number;
```

- *Type:* number

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.rules"></a>

```typescript
public readonly rules: string[];
```

- *Type:* string[]

---

##### `scopeInfo`<sup>Required</sup> <a name="scopeInfo" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.scopeInfo"></a>

```typescript
public readonly scopeInfo: GoogleChronicleReferenceListScopeInfoList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList">GoogleChronicleReferenceListScopeInfoList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleChronicleReferenceListTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference">GoogleChronicleReferenceListTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `entriesInput`<sup>Optional</sup> <a name="entriesInput" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.entriesInput"></a>

```typescript
public readonly entriesInput: IResolvable | GoogleChronicleReferenceListEntries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntries">GoogleChronicleReferenceListEntries</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `referenceListIdInput`<sup>Optional</sup> <a name="referenceListIdInput" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.referenceListIdInput"></a>

```typescript
public readonly referenceListIdInput: string;
```

- *Type:* string

---

##### `syntaxTypeInput`<sup>Optional</sup> <a name="syntaxTypeInput" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.syntaxTypeInput"></a>

```typescript
public readonly syntaxTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleChronicleReferenceListTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeouts">GoogleChronicleReferenceListTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `referenceListId`<sup>Required</sup> <a name="referenceListId" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.referenceListId"></a>

```typescript
public readonly referenceListId: string;
```

- *Type:* string

---

##### `syntaxType`<sup>Required</sup> <a name="syntaxType" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.syntaxType"></a>

```typescript
public readonly syntaxType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceList.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleReferenceListConfig <a name="GoogleChronicleReferenceListConfig" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.Initializer"></a>

```typescript
import { googleChronicleReferenceList } from '@cdktf/provider-google-beta'

const googleChronicleReferenceListConfig: googleChronicleReferenceList.GoogleChronicleReferenceListConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.description">description</a></code> | <code>string</code> | Required. A user-provided description of the reference list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.entries">entries</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntries">GoogleChronicleReferenceListEntries</a>[]</code> | entries block. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.instance">instance</a></code> | <code>string</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.location">location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.referenceListId">referenceListId</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.syntaxType">syntaxType</a></code> | <code>string</code> | Possible values: REFERENCE_LIST_SYNTAX_TYPE_PLAIN_TEXT_STRING REFERENCE_LIST_SYNTAX_TYPE_REGEX REFERENCE_LIST_SYNTAX_TYPE_CIDR. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_chronicle_reference_list#id GoogleChronicleReferenceList#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_chronicle_reference_list#project GoogleChronicleReferenceList#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeouts">GoogleChronicleReferenceListTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Required. A user-provided description of the reference list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_chronicle_reference_list#description GoogleChronicleReferenceList#description}

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.entries"></a>

```typescript
public readonly entries: IResolvable | GoogleChronicleReferenceListEntries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntries">GoogleChronicleReferenceListEntries</a>[]

entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_chronicle_reference_list#entries GoogleChronicleReferenceList#entries}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_chronicle_reference_list#instance GoogleChronicleReferenceList#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_chronicle_reference_list#location GoogleChronicleReferenceList#location}

---

##### `referenceListId`<sup>Required</sup> <a name="referenceListId" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.referenceListId"></a>

```typescript
public readonly referenceListId: string;
```

- *Type:* string

Required.

The ID to use for the reference list. This is also the display name for
the reference list. It must satisfy the following requirements:
- Starts with letter.
- Contains only letters, numbers and underscore.
- Has length < 256.
- Must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_chronicle_reference_list#reference_list_id GoogleChronicleReferenceList#reference_list_id}

---

##### `syntaxType`<sup>Required</sup> <a name="syntaxType" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.syntaxType"></a>

```typescript
public readonly syntaxType: string;
```

- *Type:* string

Possible values: REFERENCE_LIST_SYNTAX_TYPE_PLAIN_TEXT_STRING REFERENCE_LIST_SYNTAX_TYPE_REGEX REFERENCE_LIST_SYNTAX_TYPE_CIDR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_chronicle_reference_list#syntax_type GoogleChronicleReferenceList#syntax_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_chronicle_reference_list#id GoogleChronicleReferenceList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_chronicle_reference_list#project GoogleChronicleReferenceList#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleChronicleReferenceListTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeouts">GoogleChronicleReferenceListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_chronicle_reference_list#timeouts GoogleChronicleReferenceList#timeouts}

---

### GoogleChronicleReferenceListEntries <a name="GoogleChronicleReferenceListEntries" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntries.Initializer"></a>

```typescript
import { googleChronicleReferenceList } from '@cdktf/provider-google-beta'

const googleChronicleReferenceListEntries: googleChronicleReferenceList.GoogleChronicleReferenceListEntries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntries.property.value">value</a></code> | <code>string</code> | Required. The value of the entry. Maximum length is 512 characters. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntries.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Required. The value of the entry. Maximum length is 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_chronicle_reference_list#value GoogleChronicleReferenceList#value}

---

### GoogleChronicleReferenceListScopeInfo <a name="GoogleChronicleReferenceListScopeInfo" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfo.Initializer"></a>

```typescript
import { googleChronicleReferenceList } from '@cdktf/provider-google-beta'

const googleChronicleReferenceListScopeInfo: googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfo = { ... }
```


### GoogleChronicleReferenceListScopeInfoReferenceListScope <a name="GoogleChronicleReferenceListScopeInfoReferenceListScope" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScope.Initializer"></a>

```typescript
import { googleChronicleReferenceList } from '@cdktf/provider-google-beta'

const googleChronicleReferenceListScopeInfoReferenceListScope: googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScope = { ... }
```


### GoogleChronicleReferenceListTimeouts <a name="GoogleChronicleReferenceListTimeouts" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeouts.Initializer"></a>

```typescript
import { googleChronicleReferenceList } from '@cdktf/provider-google-beta'

const googleChronicleReferenceListTimeouts: googleChronicleReferenceList.GoogleChronicleReferenceListTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_chronicle_reference_list#create GoogleChronicleReferenceList#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_chronicle_reference_list#delete GoogleChronicleReferenceList#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_chronicle_reference_list#update GoogleChronicleReferenceList#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_chronicle_reference_list#create GoogleChronicleReferenceList#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_chronicle_reference_list#delete GoogleChronicleReferenceList#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_chronicle_reference_list#update GoogleChronicleReferenceList#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleReferenceListEntriesList <a name="GoogleChronicleReferenceListEntriesList" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.Initializer"></a>

```typescript
import { googleChronicleReferenceList } from '@cdktf/provider-google-beta'

new googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.get"></a>

```typescript
public get(index: number): GoogleChronicleReferenceListEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntries">GoogleChronicleReferenceListEntries</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleChronicleReferenceListEntries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntries">GoogleChronicleReferenceListEntries</a>[]

---


### GoogleChronicleReferenceListEntriesOutputReference <a name="GoogleChronicleReferenceListEntriesOutputReference" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.Initializer"></a>

```typescript
import { googleChronicleReferenceList } from '@cdktf/provider-google-beta'

new googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntries">GoogleChronicleReferenceListEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleChronicleReferenceListEntries;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListEntries">GoogleChronicleReferenceListEntries</a>

---


### GoogleChronicleReferenceListScopeInfoList <a name="GoogleChronicleReferenceListScopeInfoList" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.Initializer"></a>

```typescript
import { googleChronicleReferenceList } from '@cdktf/provider-google-beta'

new googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.get"></a>

```typescript
public get(index: number): GoogleChronicleReferenceListScopeInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleChronicleReferenceListScopeInfoOutputReference <a name="GoogleChronicleReferenceListScopeInfoOutputReference" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.Initializer"></a>

```typescript
import { googleChronicleReferenceList } from '@cdktf/provider-google-beta'

new googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.property.referenceListScope">referenceListScope</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList">GoogleChronicleReferenceListScopeInfoReferenceListScopeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfo">GoogleChronicleReferenceListScopeInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `referenceListScope`<sup>Required</sup> <a name="referenceListScope" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.property.referenceListScope"></a>

```typescript
public readonly referenceListScope: GoogleChronicleReferenceListScopeInfoReferenceListScopeList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList">GoogleChronicleReferenceListScopeInfoReferenceListScopeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleChronicleReferenceListScopeInfo;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfo">GoogleChronicleReferenceListScopeInfo</a>

---


### GoogleChronicleReferenceListScopeInfoReferenceListScopeList <a name="GoogleChronicleReferenceListScopeInfoReferenceListScopeList" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.Initializer"></a>

```typescript
import { googleChronicleReferenceList } from '@cdktf/provider-google-beta'

new googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.get"></a>

```typescript
public get(index: number): GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference <a name="GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.Initializer"></a>

```typescript
import { googleChronicleReferenceList } from '@cdktf/provider-google-beta'

new googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.scopeNames">scopeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScope">GoogleChronicleReferenceListScopeInfoReferenceListScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scopeNames`<sup>Required</sup> <a name="scopeNames" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.scopeNames"></a>

```typescript
public readonly scopeNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleChronicleReferenceListScopeInfoReferenceListScope;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListScopeInfoReferenceListScope">GoogleChronicleReferenceListScopeInfoReferenceListScope</a>

---


### GoogleChronicleReferenceListTimeoutsOutputReference <a name="GoogleChronicleReferenceListTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleChronicleReferenceList } from '@cdktf/provider-google-beta'

new googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeouts">GoogleChronicleReferenceListTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleChronicleReferenceListTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleChronicleReferenceList.GoogleChronicleReferenceListTimeouts">GoogleChronicleReferenceListTimeouts</a>

---



