# `googleContainerAnalysisOccurrence` Submodule <a name="`googleContainerAnalysisOccurrence` Submodule" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContainerAnalysisOccurrence <a name="GoogleContainerAnalysisOccurrence" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence google_container_analysis_occurrence}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer"></a>

```typescript
import { googleContainerAnalysisOccurrence } from '@cdktf/provider-google-beta'

new googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence(scope: Construct, id: string, config: GoogleContainerAnalysisOccurrenceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig">GoogleContainerAnalysisOccurrenceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig">GoogleContainerAnalysisOccurrenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.putAttestation">putAttestation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.resetRemediation">resetRemediation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttestation` <a name="putAttestation" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.putAttestation"></a>

```typescript
public putAttestation(value: GoogleContainerAnalysisOccurrenceAttestation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.putAttestation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation">GoogleContainerAnalysisOccurrenceAttestation</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleContainerAnalysisOccurrenceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts">GoogleContainerAnalysisOccurrenceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRemediation` <a name="resetRemediation" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.resetRemediation"></a>

```typescript
public resetRemediation(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleContainerAnalysisOccurrence resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.isConstruct"></a>

```typescript
import { googleContainerAnalysisOccurrence } from '@cdktf/provider-google-beta'

googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.isTerraformElement"></a>

```typescript
import { googleContainerAnalysisOccurrence } from '@cdktf/provider-google-beta'

googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.isTerraformResource"></a>

```typescript
import { googleContainerAnalysisOccurrence } from '@cdktf/provider-google-beta'

googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.generateConfigForImport"></a>

```typescript
import { googleContainerAnalysisOccurrence } from '@cdktf/provider-google-beta'

googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleContainerAnalysisOccurrence resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleContainerAnalysisOccurrence to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleContainerAnalysisOccurrence that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleContainerAnalysisOccurrence to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.attestation">attestation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference">GoogleContainerAnalysisOccurrenceAttestationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference">GoogleContainerAnalysisOccurrenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.attestationInput">attestationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation">GoogleContainerAnalysisOccurrenceAttestation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.noteNameInput">noteNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.remediationInput">remediationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.resourceUriInput">resourceUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts">GoogleContainerAnalysisOccurrenceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.noteName">noteName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.remediation">remediation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.resourceUri">resourceUri</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `attestation`<sup>Required</sup> <a name="attestation" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.attestation"></a>

```typescript
public readonly attestation: GoogleContainerAnalysisOccurrenceAttestationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference">GoogleContainerAnalysisOccurrenceAttestationOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleContainerAnalysisOccurrenceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference">GoogleContainerAnalysisOccurrenceTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `attestationInput`<sup>Optional</sup> <a name="attestationInput" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.attestationInput"></a>

```typescript
public readonly attestationInput: GoogleContainerAnalysisOccurrenceAttestation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation">GoogleContainerAnalysisOccurrenceAttestation</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `noteNameInput`<sup>Optional</sup> <a name="noteNameInput" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.noteNameInput"></a>

```typescript
public readonly noteNameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `remediationInput`<sup>Optional</sup> <a name="remediationInput" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.remediationInput"></a>

```typescript
public readonly remediationInput: string;
```

- *Type:* string

---

##### `resourceUriInput`<sup>Optional</sup> <a name="resourceUriInput" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.resourceUriInput"></a>

```typescript
public readonly resourceUriInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleContainerAnalysisOccurrenceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts">GoogleContainerAnalysisOccurrenceTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `noteName`<sup>Required</sup> <a name="noteName" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.noteName"></a>

```typescript
public readonly noteName: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `remediation`<sup>Required</sup> <a name="remediation" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.remediation"></a>

```typescript
public readonly remediation: string;
```

- *Type:* string

---

##### `resourceUri`<sup>Required</sup> <a name="resourceUri" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.resourceUri"></a>

```typescript
public readonly resourceUri: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContainerAnalysisOccurrenceAttestation <a name="GoogleContainerAnalysisOccurrenceAttestation" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation.Initializer"></a>

```typescript
import { googleContainerAnalysisOccurrence } from '@cdktf/provider-google-beta'

const googleContainerAnalysisOccurrenceAttestation: googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation.property.serializedPayload">serializedPayload</a></code> | <code>string</code> | The serialized payload that is verified by one or more signatures. A base64-encoded string. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation.property.signatures">signatures</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures">GoogleContainerAnalysisOccurrenceAttestationSignatures</a>[]</code> | signatures block. |

---

##### `serializedPayload`<sup>Required</sup> <a name="serializedPayload" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation.property.serializedPayload"></a>

```typescript
public readonly serializedPayload: string;
```

- *Type:* string

The serialized payload that is verified by one or more signatures. A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#serialized_payload GoogleContainerAnalysisOccurrence#serialized_payload}

---

##### `signatures`<sup>Required</sup> <a name="signatures" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation.property.signatures"></a>

```typescript
public readonly signatures: IResolvable | GoogleContainerAnalysisOccurrenceAttestationSignatures[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures">GoogleContainerAnalysisOccurrenceAttestationSignatures</a>[]

signatures block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#signatures GoogleContainerAnalysisOccurrence#signatures}

---

### GoogleContainerAnalysisOccurrenceAttestationSignatures <a name="GoogleContainerAnalysisOccurrenceAttestationSignatures" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures.Initializer"></a>

```typescript
import { googleContainerAnalysisOccurrence } from '@cdktf/provider-google-beta'

const googleContainerAnalysisOccurrenceAttestationSignatures: googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures.property.publicKeyId">publicKeyId</a></code> | <code>string</code> | The identifier for the public key that verifies this signature. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures.property.signature">signature</a></code> | <code>string</code> | The content of the signature, an opaque bytestring. |

---

##### `publicKeyId`<sup>Required</sup> <a name="publicKeyId" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures.property.publicKeyId"></a>

```typescript
public readonly publicKeyId: string;
```

- *Type:* string

The identifier for the public key that verifies this signature.

MUST be an RFC3986 conformant
URI. * When possible, the key id should be an
immutable reference, such as a cryptographic digest.
Examples of valid values:

* OpenPGP V4 public key fingerprint. See https://www.iana.org/assignments/uri-schemes/prov/openpgp4fpr
  for more details on this scheme.
    * 'openpgp4fpr:74FAF3B861BDA0870C7B6DEF607E48D2A663AEEA'
* RFC6920 digest-named SubjectPublicKeyInfo (digest of the DER serialization):
    * "ni:///sha-256;cD9o9Cq6LG3jD0iKXqEi_vdjJGecm_iXkbqVoScViaU"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#public_key_id GoogleContainerAnalysisOccurrence#public_key_id}

---

##### `signature`<sup>Optional</sup> <a name="signature" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

The content of the signature, an opaque bytestring.

The payload that this signature verifies MUST be
unambiguously provided with the Signature during
verification. A wrapper message might provide the
payload explicitly. Alternatively, a message might
have a canonical serialization that can always be
unambiguously computed to derive the payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#signature GoogleContainerAnalysisOccurrence#signature}

---

### GoogleContainerAnalysisOccurrenceConfig <a name="GoogleContainerAnalysisOccurrenceConfig" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.Initializer"></a>

```typescript
import { googleContainerAnalysisOccurrence } from '@cdktf/provider-google-beta'

const googleContainerAnalysisOccurrenceConfig: googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.attestation">attestation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation">GoogleContainerAnalysisOccurrenceAttestation</a></code> | attestation block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.noteName">noteName</a></code> | <code>string</code> | The analysis note associated with this occurrence, in the form of projects/[PROJECT]/notes/[NOTE_ID]. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.resourceUri">resourceUri</a></code> | <code>string</code> | Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, https://gcr.io/project/image@sha256:123abc for a Docker image. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#id GoogleContainerAnalysisOccurrence#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#project GoogleContainerAnalysisOccurrence#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.remediation">remediation</a></code> | <code>string</code> | A description of actions that can be taken to remedy the note. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts">GoogleContainerAnalysisOccurrenceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `attestation`<sup>Required</sup> <a name="attestation" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.attestation"></a>

```typescript
public readonly attestation: GoogleContainerAnalysisOccurrenceAttestation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation">GoogleContainerAnalysisOccurrenceAttestation</a>

attestation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#attestation GoogleContainerAnalysisOccurrence#attestation}

---

##### `noteName`<sup>Required</sup> <a name="noteName" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.noteName"></a>

```typescript
public readonly noteName: string;
```

- *Type:* string

The analysis note associated with this occurrence, in the form of projects/[PROJECT]/notes/[NOTE_ID].

This field can be used as a
filter in list requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#note_name GoogleContainerAnalysisOccurrence#note_name}

---

##### `resourceUri`<sup>Required</sup> <a name="resourceUri" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.resourceUri"></a>

```typescript
public readonly resourceUri: string;
```

- *Type:* string

Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, https://gcr.io/project/image@sha256:123abc for a Docker image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#resource_uri GoogleContainerAnalysisOccurrence#resource_uri}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#id GoogleContainerAnalysisOccurrence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#project GoogleContainerAnalysisOccurrence#project}.

---

##### `remediation`<sup>Optional</sup> <a name="remediation" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.remediation"></a>

```typescript
public readonly remediation: string;
```

- *Type:* string

A description of actions that can be taken to remedy the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#remediation GoogleContainerAnalysisOccurrence#remediation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleContainerAnalysisOccurrenceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts">GoogleContainerAnalysisOccurrenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#timeouts GoogleContainerAnalysisOccurrence#timeouts}

---

### GoogleContainerAnalysisOccurrenceTimeouts <a name="GoogleContainerAnalysisOccurrenceTimeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts.Initializer"></a>

```typescript
import { googleContainerAnalysisOccurrence } from '@cdktf/provider-google-beta'

const googleContainerAnalysisOccurrenceTimeouts: googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#create GoogleContainerAnalysisOccurrence#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#delete GoogleContainerAnalysisOccurrence#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#update GoogleContainerAnalysisOccurrence#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#create GoogleContainerAnalysisOccurrence#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#delete GoogleContainerAnalysisOccurrence#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_container_analysis_occurrence#update GoogleContainerAnalysisOccurrence#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContainerAnalysisOccurrenceAttestationOutputReference <a name="GoogleContainerAnalysisOccurrenceAttestationOutputReference" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.Initializer"></a>

```typescript
import { googleContainerAnalysisOccurrence } from '@cdktf/provider-google-beta'

new googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.putSignatures">putSignatures</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSignatures` <a name="putSignatures" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.putSignatures"></a>

```typescript
public putSignatures(value: IResolvable | GoogleContainerAnalysisOccurrenceAttestationSignatures[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.putSignatures.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures">GoogleContainerAnalysisOccurrenceAttestationSignatures</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.signatures">signatures</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList">GoogleContainerAnalysisOccurrenceAttestationSignaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.serializedPayloadInput">serializedPayloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.signaturesInput">signaturesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures">GoogleContainerAnalysisOccurrenceAttestationSignatures</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.serializedPayload">serializedPayload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation">GoogleContainerAnalysisOccurrenceAttestation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `signatures`<sup>Required</sup> <a name="signatures" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.signatures"></a>

```typescript
public readonly signatures: GoogleContainerAnalysisOccurrenceAttestationSignaturesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList">GoogleContainerAnalysisOccurrenceAttestationSignaturesList</a>

---

##### `serializedPayloadInput`<sup>Optional</sup> <a name="serializedPayloadInput" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.serializedPayloadInput"></a>

```typescript
public readonly serializedPayloadInput: string;
```

- *Type:* string

---

##### `signaturesInput`<sup>Optional</sup> <a name="signaturesInput" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.signaturesInput"></a>

```typescript
public readonly signaturesInput: IResolvable | GoogleContainerAnalysisOccurrenceAttestationSignatures[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures">GoogleContainerAnalysisOccurrenceAttestationSignatures</a>[]

---

##### `serializedPayload`<sup>Required</sup> <a name="serializedPayload" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.serializedPayload"></a>

```typescript
public readonly serializedPayload: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleContainerAnalysisOccurrenceAttestation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation">GoogleContainerAnalysisOccurrenceAttestation</a>

---


### GoogleContainerAnalysisOccurrenceAttestationSignaturesList <a name="GoogleContainerAnalysisOccurrenceAttestationSignaturesList" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.Initializer"></a>

```typescript
import { googleContainerAnalysisOccurrence } from '@cdktf/provider-google-beta'

new googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.get"></a>

```typescript
public get(index: number): GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures">GoogleContainerAnalysisOccurrenceAttestationSignatures</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleContainerAnalysisOccurrenceAttestationSignatures[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures">GoogleContainerAnalysisOccurrenceAttestationSignatures</a>[]

---


### GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference <a name="GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer"></a>

```typescript
import { googleContainerAnalysisOccurrence } from '@cdktf/provider-google-beta'

new googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resetSignature">resetSignature</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSignature` <a name="resetSignature" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resetSignature"></a>

```typescript
public resetSignature(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.publicKeyIdInput">publicKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.signatureInput">signatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.publicKeyId">publicKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.signature">signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures">GoogleContainerAnalysisOccurrenceAttestationSignatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `publicKeyIdInput`<sup>Optional</sup> <a name="publicKeyIdInput" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.publicKeyIdInput"></a>

```typescript
public readonly publicKeyIdInput: string;
```

- *Type:* string

---

##### `signatureInput`<sup>Optional</sup> <a name="signatureInput" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.signatureInput"></a>

```typescript
public readonly signatureInput: string;
```

- *Type:* string

---

##### `publicKeyId`<sup>Required</sup> <a name="publicKeyId" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.publicKeyId"></a>

```typescript
public readonly publicKeyId: string;
```

- *Type:* string

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleContainerAnalysisOccurrenceAttestationSignatures;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures">GoogleContainerAnalysisOccurrenceAttestationSignatures</a>

---


### GoogleContainerAnalysisOccurrenceTimeoutsOutputReference <a name="GoogleContainerAnalysisOccurrenceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleContainerAnalysisOccurrence } from '@cdktf/provider-google-beta'

new googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts">GoogleContainerAnalysisOccurrenceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleContainerAnalysisOccurrenceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts">GoogleContainerAnalysisOccurrenceTimeouts</a>

---



