# `googleDataplexDatascan` Submodule <a name="`googleDataplexDatascan` Submodule" id="@cdktf/provider-google-beta.googleDataplexDatascan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataplexDatascan <a name="GoogleDataplexDatascan" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan google_dataplex_datascan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

new googleDataplexDatascan.GoogleDataplexDatascan(scope: Construct, id: string, config: GoogleDataplexDatascanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig">GoogleDataplexDatascanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig">GoogleDataplexDatascanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putData">putData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putDataProfileSpec">putDataProfileSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putDataQualitySpec">putDataQualitySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putExecutionSpec">putExecutionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetDataProfileSpec">resetDataProfileSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetDataQualitySpec">resetDataQualitySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putData` <a name="putData" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putData"></a>

```typescript
public putData(value: GoogleDataplexDatascanData): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData">GoogleDataplexDatascanData</a>

---

##### `putDataProfileSpec` <a name="putDataProfileSpec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putDataProfileSpec"></a>

```typescript
public putDataProfileSpec(value: GoogleDataplexDatascanDataProfileSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putDataProfileSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec">GoogleDataplexDatascanDataProfileSpec</a>

---

##### `putDataQualitySpec` <a name="putDataQualitySpec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putDataQualitySpec"></a>

```typescript
public putDataQualitySpec(value: GoogleDataplexDatascanDataQualitySpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putDataQualitySpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec">GoogleDataplexDatascanDataQualitySpec</a>

---

##### `putExecutionSpec` <a name="putExecutionSpec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putExecutionSpec"></a>

```typescript
public putExecutionSpec(value: GoogleDataplexDatascanExecutionSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putExecutionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec">GoogleDataplexDatascanExecutionSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDataplexDatascanTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts">GoogleDataplexDatascanTimeouts</a>

---

##### `resetDataProfileSpec` <a name="resetDataProfileSpec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetDataProfileSpec"></a>

```typescript
public resetDataProfileSpec(): void
```

##### `resetDataQualitySpec` <a name="resetDataQualitySpec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetDataQualitySpec"></a>

```typescript
public resetDataQualitySpec(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataplexDatascan resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.isConstruct"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

googleDataplexDatascan.GoogleDataplexDatascan.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.isTerraformElement"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

googleDataplexDatascan.GoogleDataplexDatascan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.isTerraformResource"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

googleDataplexDatascan.GoogleDataplexDatascan.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.generateConfigForImport"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

googleDataplexDatascan.GoogleDataplexDatascan.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDataplexDatascan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataplexDatascan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataplexDatascan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataplexDatascan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.data">data</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference">GoogleDataplexDatascanDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataProfileSpec">dataProfileSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference">GoogleDataplexDatascanDataProfileSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataQualitySpec">dataQualitySpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference">GoogleDataplexDatascanDataQualitySpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.executionSpec">executionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference">GoogleDataplexDatascanExecutionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.executionStatus">executionStatus</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList">GoogleDataplexDatascanExecutionStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference">GoogleDataplexDatascanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataInput">dataInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData">GoogleDataplexDatascanData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataProfileSpecInput">dataProfileSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec">GoogleDataplexDatascanDataProfileSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataQualitySpecInput">dataQualitySpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec">GoogleDataplexDatascanDataQualitySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataScanIdInput">dataScanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.executionSpecInput">executionSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec">GoogleDataplexDatascanExecutionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts">GoogleDataplexDatascanTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataScanId">dataScanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.data"></a>

```typescript
public readonly data: GoogleDataplexDatascanDataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference">GoogleDataplexDatascanDataOutputReference</a>

---

##### `dataProfileSpec`<sup>Required</sup> <a name="dataProfileSpec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataProfileSpec"></a>

```typescript
public readonly dataProfileSpec: GoogleDataplexDatascanDataProfileSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference">GoogleDataplexDatascanDataProfileSpecOutputReference</a>

---

##### `dataQualitySpec`<sup>Required</sup> <a name="dataQualitySpec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataQualitySpec"></a>

```typescript
public readonly dataQualitySpec: GoogleDataplexDatascanDataQualitySpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference">GoogleDataplexDatascanDataQualitySpecOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `executionSpec`<sup>Required</sup> <a name="executionSpec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.executionSpec"></a>

```typescript
public readonly executionSpec: GoogleDataplexDatascanExecutionSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference">GoogleDataplexDatascanExecutionSpecOutputReference</a>

---

##### `executionStatus`<sup>Required</sup> <a name="executionStatus" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.executionStatus"></a>

```typescript
public readonly executionStatus: GoogleDataplexDatascanExecutionStatusList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList">GoogleDataplexDatascanExecutionStatusList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataplexDatascanTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference">GoogleDataplexDatascanTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataInput"></a>

```typescript
public readonly dataInput: GoogleDataplexDatascanData;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData">GoogleDataplexDatascanData</a>

---

##### `dataProfileSpecInput`<sup>Optional</sup> <a name="dataProfileSpecInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataProfileSpecInput"></a>

```typescript
public readonly dataProfileSpecInput: GoogleDataplexDatascanDataProfileSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec">GoogleDataplexDatascanDataProfileSpec</a>

---

##### `dataQualitySpecInput`<sup>Optional</sup> <a name="dataQualitySpecInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataQualitySpecInput"></a>

```typescript
public readonly dataQualitySpecInput: GoogleDataplexDatascanDataQualitySpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec">GoogleDataplexDatascanDataQualitySpec</a>

---

##### `dataScanIdInput`<sup>Optional</sup> <a name="dataScanIdInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataScanIdInput"></a>

```typescript
public readonly dataScanIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `executionSpecInput`<sup>Optional</sup> <a name="executionSpecInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.executionSpecInput"></a>

```typescript
public readonly executionSpecInput: GoogleDataplexDatascanExecutionSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec">GoogleDataplexDatascanExecutionSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDataplexDatascanTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts">GoogleDataplexDatascanTimeouts</a>

---

##### `dataScanId`<sup>Required</sup> <a name="dataScanId" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.dataScanId"></a>

```typescript
public readonly dataScanId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataplexDatascanConfig <a name="GoogleDataplexDatascanConfig" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

const googleDataplexDatascanConfig: googleDataplexDatascan.GoogleDataplexDatascanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.data">data</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData">GoogleDataplexDatascanData</a></code> | data block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.dataScanId">dataScanId</a></code> | <code>string</code> | DataScan identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.executionSpec">executionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec">GoogleDataplexDatascanExecutionSpec</a></code> | execution_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.location">location</a></code> | <code>string</code> | The location where the data scan should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.dataProfileSpec">dataProfileSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec">GoogleDataplexDatascanDataProfileSpec</a></code> | data_profile_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.dataQualitySpec">dataQualitySpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec">GoogleDataplexDatascanDataQualitySpec</a></code> | data_quality_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.description">description</a></code> | <code>string</code> | Description of the scan. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.displayName">displayName</a></code> | <code>string</code> | User friendly display name. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#id GoogleDataplexDatascan#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-defined labels for the scan. A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#project GoogleDataplexDatascan#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts">GoogleDataplexDatascanTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.data"></a>

```typescript
public readonly data: GoogleDataplexDatascanData;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData">GoogleDataplexDatascanData</a>

data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#data GoogleDataplexDatascan#data}

---

##### `dataScanId`<sup>Required</sup> <a name="dataScanId" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.dataScanId"></a>

```typescript
public readonly dataScanId: string;
```

- *Type:* string

DataScan identifier.

Must contain only lowercase letters, numbers and hyphens. Must start with a letter. Must end with a number or a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#data_scan_id GoogleDataplexDatascan#data_scan_id}

---

##### `executionSpec`<sup>Required</sup> <a name="executionSpec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.executionSpec"></a>

```typescript
public readonly executionSpec: GoogleDataplexDatascanExecutionSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec">GoogleDataplexDatascanExecutionSpec</a>

execution_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#execution_spec GoogleDataplexDatascan#execution_spec}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location where the data scan should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#location GoogleDataplexDatascan#location}

---

##### `dataProfileSpec`<sup>Optional</sup> <a name="dataProfileSpec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.dataProfileSpec"></a>

```typescript
public readonly dataProfileSpec: GoogleDataplexDatascanDataProfileSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec">GoogleDataplexDatascanDataProfileSpec</a>

data_profile_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#data_profile_spec GoogleDataplexDatascan#data_profile_spec}

---

##### `dataQualitySpec`<sup>Optional</sup> <a name="dataQualitySpec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.dataQualitySpec"></a>

```typescript
public readonly dataQualitySpec: GoogleDataplexDatascanDataQualitySpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec">GoogleDataplexDatascanDataQualitySpec</a>

data_quality_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#data_quality_spec GoogleDataplexDatascan#data_quality_spec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the scan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#description GoogleDataplexDatascan#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#display_name GoogleDataplexDatascan#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#id GoogleDataplexDatascan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined labels for the scan. A list of key->value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#labels GoogleDataplexDatascan#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#project GoogleDataplexDatascan#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataplexDatascanTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts">GoogleDataplexDatascanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#timeouts GoogleDataplexDatascan#timeouts}

---

### GoogleDataplexDatascanData <a name="GoogleDataplexDatascanData" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

const googleDataplexDatascanData: googleDataplexDatascan.GoogleDataplexDatascanData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData.property.entity">entity</a></code> | <code>string</code> | The Dataplex entity that represents the data source(e.g. BigQuery table) for Datascan. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData.property.resource">resource</a></code> | <code>string</code> | The service-qualified full resource name of the cloud resource for a DataScan job to scan against. |

---

##### `entity`<sup>Optional</sup> <a name="entity" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData.property.entity"></a>

```typescript
public readonly entity: string;
```

- *Type:* string

The Dataplex entity that represents the data source(e.g. BigQuery table) for Datascan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#entity GoogleDataplexDatascan#entity}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

The service-qualified full resource name of the cloud resource for a DataScan job to scan against.

The field could be:
(Cloud Storage bucket for DataDiscoveryScan)BigQuery table of type "TABLE" for DataProfileScan/DataQualityScan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#resource GoogleDataplexDatascan#resource}

---

### GoogleDataplexDatascanDataProfileSpec <a name="GoogleDataplexDatascanDataProfileSpec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

const googleDataplexDatascanDataProfileSpec: googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.property.excludeFields">excludeFields</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields">GoogleDataplexDatascanDataProfileSpecExcludeFields</a></code> | exclude_fields block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.property.includeFields">includeFields</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields">GoogleDataplexDatascanDataProfileSpecIncludeFields</a></code> | include_fields block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.property.postScanActions">postScanActions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions">GoogleDataplexDatascanDataProfileSpecPostScanActions</a></code> | post_scan_actions block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.property.rowFilter">rowFilter</a></code> | <code>string</code> | A filter applied to all rows in a single DataScan job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.property.samplingPercent">samplingPercent</a></code> | <code>number</code> | The percentage of the records to be selected from the dataset for DataScan. |

---

##### `excludeFields`<sup>Optional</sup> <a name="excludeFields" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.property.excludeFields"></a>

```typescript
public readonly excludeFields: GoogleDataplexDatascanDataProfileSpecExcludeFields;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields">GoogleDataplexDatascanDataProfileSpecExcludeFields</a>

exclude_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#exclude_fields GoogleDataplexDatascan#exclude_fields}

---

##### `includeFields`<sup>Optional</sup> <a name="includeFields" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.property.includeFields"></a>

```typescript
public readonly includeFields: GoogleDataplexDatascanDataProfileSpecIncludeFields;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields">GoogleDataplexDatascanDataProfileSpecIncludeFields</a>

include_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#include_fields GoogleDataplexDatascan#include_fields}

---

##### `postScanActions`<sup>Optional</sup> <a name="postScanActions" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.property.postScanActions"></a>

```typescript
public readonly postScanActions: GoogleDataplexDatascanDataProfileSpecPostScanActions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions">GoogleDataplexDatascanDataProfileSpecPostScanActions</a>

post_scan_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#post_scan_actions GoogleDataplexDatascan#post_scan_actions}

---

##### `rowFilter`<sup>Optional</sup> <a name="rowFilter" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.property.rowFilter"></a>

```typescript
public readonly rowFilter: string;
```

- *Type:* string

A filter applied to all rows in a single DataScan job.

The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#row_filter GoogleDataplexDatascan#row_filter}

---

##### `samplingPercent`<sup>Optional</sup> <a name="samplingPercent" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec.property.samplingPercent"></a>

```typescript
public readonly samplingPercent: number;
```

- *Type:* number

The percentage of the records to be selected from the dataset for DataScan.

Value can range between 0.0 and 100.0 with up to 3 significant decimal digits.
Sampling is not applied if 'sampling_percent' is not specified, 0 or 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#sampling_percent GoogleDataplexDatascan#sampling_percent}

---

### GoogleDataplexDatascanDataProfileSpecExcludeFields <a name="GoogleDataplexDatascanDataProfileSpecExcludeFields" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

const googleDataplexDatascanDataProfileSpecExcludeFields: googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields.property.fieldNames">fieldNames</a></code> | <code>string[]</code> | Expected input is a list of fully qualified names of fields as in the schema. |

---

##### `fieldNames`<sup>Optional</sup> <a name="fieldNames" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields.property.fieldNames"></a>

```typescript
public readonly fieldNames: string[];
```

- *Type:* string[]

Expected input is a list of fully qualified names of fields as in the schema.

Only top-level field names for nested fields are supported.
For instance, if 'x' is of nested field type, listing 'x' is supported but 'x.y.z' is not supported. Here 'y' and 'y.z' are nested fields of 'x'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#field_names GoogleDataplexDatascan#field_names}

---

### GoogleDataplexDatascanDataProfileSpecIncludeFields <a name="GoogleDataplexDatascanDataProfileSpecIncludeFields" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

const googleDataplexDatascanDataProfileSpecIncludeFields: googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields.property.fieldNames">fieldNames</a></code> | <code>string[]</code> | Expected input is a list of fully qualified names of fields as in the schema. |

---

##### `fieldNames`<sup>Optional</sup> <a name="fieldNames" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields.property.fieldNames"></a>

```typescript
public readonly fieldNames: string[];
```

- *Type:* string[]

Expected input is a list of fully qualified names of fields as in the schema.

Only top-level field names for nested fields are supported.
For instance, if 'x' is of nested field type, listing 'x' is supported but 'x.y.z' is not supported. Here 'y' and 'y.z' are nested fields of 'x'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#field_names GoogleDataplexDatascan#field_names}

---

### GoogleDataplexDatascanDataProfileSpecPostScanActions <a name="GoogleDataplexDatascanDataProfileSpecPostScanActions" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

const googleDataplexDatascanDataProfileSpecPostScanActions: googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions.property.bigqueryExport">bigqueryExport</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a></code> | bigquery_export block. |

---

##### `bigqueryExport`<sup>Optional</sup> <a name="bigqueryExport" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions.property.bigqueryExport"></a>

```typescript
public readonly bigqueryExport: GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a>

bigquery_export block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#bigquery_export GoogleDataplexDatascan#bigquery_export}

---

### GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport <a name="GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

const googleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport: googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport.property.resultsTable">resultsTable</a></code> | <code>string</code> | The BigQuery table to export DataProfileScan results to. Format://bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID. |

---

##### `resultsTable`<sup>Optional</sup> <a name="resultsTable" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport.property.resultsTable"></a>

```typescript
public readonly resultsTable: string;
```

- *Type:* string

The BigQuery table to export DataProfileScan results to. Format://bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#results_table GoogleDataplexDatascan#results_table}

---

### GoogleDataplexDatascanDataQualitySpec <a name="GoogleDataplexDatascanDataQualitySpec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

const googleDataplexDatascanDataQualitySpec: googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec.property.postScanActions">postScanActions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions">GoogleDataplexDatascanDataQualitySpecPostScanActions</a></code> | post_scan_actions block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec.property.rowFilter">rowFilter</a></code> | <code>string</code> | A filter applied to all rows in a single DataScan job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec.property.rules">rules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules">GoogleDataplexDatascanDataQualitySpecRules</a>[]</code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec.property.samplingPercent">samplingPercent</a></code> | <code>number</code> | The percentage of the records to be selected from the dataset for DataScan. |

---

##### `postScanActions`<sup>Optional</sup> <a name="postScanActions" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec.property.postScanActions"></a>

```typescript
public readonly postScanActions: GoogleDataplexDatascanDataQualitySpecPostScanActions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions">GoogleDataplexDatascanDataQualitySpecPostScanActions</a>

post_scan_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#post_scan_actions GoogleDataplexDatascan#post_scan_actions}

---

##### `rowFilter`<sup>Optional</sup> <a name="rowFilter" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec.property.rowFilter"></a>

```typescript
public readonly rowFilter: string;
```

- *Type:* string

A filter applied to all rows in a single DataScan job.

The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#row_filter GoogleDataplexDatascan#row_filter}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec.property.rules"></a>

```typescript
public readonly rules: IResolvable | GoogleDataplexDatascanDataQualitySpecRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules">GoogleDataplexDatascanDataQualitySpecRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#rules GoogleDataplexDatascan#rules}

---

##### `samplingPercent`<sup>Optional</sup> <a name="samplingPercent" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec.property.samplingPercent"></a>

```typescript
public readonly samplingPercent: number;
```

- *Type:* number

The percentage of the records to be selected from the dataset for DataScan.

Value can range between 0.0 and 100.0 with up to 3 significant decimal digits.
Sampling is not applied if 'sampling_percent' is not specified, 0 or 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#sampling_percent GoogleDataplexDatascan#sampling_percent}

---

### GoogleDataplexDatascanDataQualitySpecPostScanActions <a name="GoogleDataplexDatascanDataQualitySpecPostScanActions" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

const googleDataplexDatascanDataQualitySpecPostScanActions: googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions.property.bigqueryExport">bigqueryExport</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a></code> | bigquery_export block. |

---

##### `bigqueryExport`<sup>Optional</sup> <a name="bigqueryExport" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions.property.bigqueryExport"></a>

```typescript
public readonly bigqueryExport: GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a>

bigquery_export block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#bigquery_export GoogleDataplexDatascan#bigquery_export}

---

### GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport <a name="GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

const googleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport: googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport.property.resultsTable">resultsTable</a></code> | <code>string</code> | The BigQuery table to export DataQualityScan results to. Format://bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID. |

---

##### `resultsTable`<sup>Optional</sup> <a name="resultsTable" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport.property.resultsTable"></a>

```typescript
public readonly resultsTable: string;
```

- *Type:* string

The BigQuery table to export DataQualityScan results to. Format://bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#results_table GoogleDataplexDatascan#results_table}

---

### GoogleDataplexDatascanDataQualitySpecRules <a name="GoogleDataplexDatascanDataQualitySpecRules" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

const googleDataplexDatascanDataQualitySpecRules: googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.dimension">dimension</a></code> | <code>string</code> | The dimension a rule belongs to. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.column">column</a></code> | <code>string</code> | The unnested column which this rule is evaluated against. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.description">description</a></code> | <code>string</code> | Description of the rule. The maximum length is 1,024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.ignoreNull">ignoreNull</a></code> | <code>boolean \| cdktf.IResolvable</code> | Rows with null values will automatically fail a rule, unless ignoreNull is true. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.name">name</a></code> | <code>string</code> | A mutable name for the rule. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.nonNullExpectation">nonNullExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation">GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation</a></code> | non_null_expectation block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.rangeExpectation">rangeExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation</a></code> | range_expectation block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.regexExpectation">regexExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation">GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation</a></code> | regex_expectation block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.rowConditionExpectation">rowConditionExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation</a></code> | row_condition_expectation block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.setExpectation">setExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation">GoogleDataplexDatascanDataQualitySpecRulesSetExpectation</a></code> | set_expectation block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.sqlAssertion">sqlAssertion</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion">GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion</a></code> | sql_assertion block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.statisticRangeExpectation">statisticRangeExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a></code> | statistic_range_expectation block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.tableConditionExpectation">tableConditionExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation</a></code> | table_condition_expectation block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.threshold">threshold</a></code> | <code>number</code> | The minimum ratio of passing_rows / total_rows required to pass this rule, with a range of [0.0, 1.0]. 0 indicates default value (i.e. 1.0). |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.uniquenessExpectation">uniquenessExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation">GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation</a></code> | uniqueness_expectation block. |

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.dimension"></a>

```typescript
public readonly dimension: string;
```

- *Type:* string

The dimension a rule belongs to.

Results are also aggregated at the dimension level. Supported dimensions are ["COMPLETENESS", "ACCURACY", "CONSISTENCY", "VALIDITY", "UNIQUENESS", "INTEGRITY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#dimension GoogleDataplexDatascan#dimension}

---

##### `column`<sup>Optional</sup> <a name="column" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.column"></a>

```typescript
public readonly column: string;
```

- *Type:* string

The unnested column which this rule is evaluated against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#column GoogleDataplexDatascan#column}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the rule. The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#description GoogleDataplexDatascan#description}

---

##### `ignoreNull`<sup>Optional</sup> <a name="ignoreNull" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.ignoreNull"></a>

```typescript
public readonly ignoreNull: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Rows with null values will automatically fail a rule, unless ignoreNull is true.

In that case, such null rows are trivially considered passing. Only applicable to ColumnMap rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#ignore_null GoogleDataplexDatascan#ignore_null}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A mutable name for the rule.

The name must contain only letters (a-z, A-Z), numbers (0-9), or hyphens (-).
The maximum length is 63 characters.
Must start with a letter.
Must end with a number or a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#name GoogleDataplexDatascan#name}

---

##### `nonNullExpectation`<sup>Optional</sup> <a name="nonNullExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.nonNullExpectation"></a>

```typescript
public readonly nonNullExpectation: GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation">GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation</a>

non_null_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#non_null_expectation GoogleDataplexDatascan#non_null_expectation}

---

##### `rangeExpectation`<sup>Optional</sup> <a name="rangeExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.rangeExpectation"></a>

```typescript
public readonly rangeExpectation: GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation</a>

range_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#range_expectation GoogleDataplexDatascan#range_expectation}

---

##### `regexExpectation`<sup>Optional</sup> <a name="regexExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.regexExpectation"></a>

```typescript
public readonly regexExpectation: GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation">GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation</a>

regex_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#regex_expectation GoogleDataplexDatascan#regex_expectation}

---

##### `rowConditionExpectation`<sup>Optional</sup> <a name="rowConditionExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.rowConditionExpectation"></a>

```typescript
public readonly rowConditionExpectation: GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation</a>

row_condition_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#row_condition_expectation GoogleDataplexDatascan#row_condition_expectation}

---

##### `setExpectation`<sup>Optional</sup> <a name="setExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.setExpectation"></a>

```typescript
public readonly setExpectation: GoogleDataplexDatascanDataQualitySpecRulesSetExpectation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation">GoogleDataplexDatascanDataQualitySpecRulesSetExpectation</a>

set_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#set_expectation GoogleDataplexDatascan#set_expectation}

---

##### `sqlAssertion`<sup>Optional</sup> <a name="sqlAssertion" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.sqlAssertion"></a>

```typescript
public readonly sqlAssertion: GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion">GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion</a>

sql_assertion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#sql_assertion GoogleDataplexDatascan#sql_assertion}

---

##### `statisticRangeExpectation`<sup>Optional</sup> <a name="statisticRangeExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.statisticRangeExpectation"></a>

```typescript
public readonly statisticRangeExpectation: GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a>

statistic_range_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#statistic_range_expectation GoogleDataplexDatascan#statistic_range_expectation}

---

##### `tableConditionExpectation`<sup>Optional</sup> <a name="tableConditionExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.tableConditionExpectation"></a>

```typescript
public readonly tableConditionExpectation: GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation</a>

table_condition_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#table_condition_expectation GoogleDataplexDatascan#table_condition_expectation}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

The minimum ratio of passing_rows / total_rows required to pass this rule, with a range of [0.0, 1.0]. 0 indicates default value (i.e. 1.0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#threshold GoogleDataplexDatascan#threshold}

---

##### `uniquenessExpectation`<sup>Optional</sup> <a name="uniquenessExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules.property.uniquenessExpectation"></a>

```typescript
public readonly uniquenessExpectation: GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation">GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation</a>

uniqueness_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#uniqueness_expectation GoogleDataplexDatascan#uniqueness_expectation}

---

### GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation <a name="GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

const googleDataplexDatascanDataQualitySpecRulesNonNullExpectation: googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation = { ... }
```


### GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation <a name="GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

const googleDataplexDatascanDataQualitySpecRulesRangeExpectation: googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation.property.maxValue">maxValue</a></code> | <code>string</code> | The maximum column value allowed for a row to pass this validation. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation.property.minValue">minValue</a></code> | <code>string</code> | The minimum column value allowed for a row to pass this validation. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation.property.strictMaxEnabled">strictMaxEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether each value needs to be strictly lesser than ('<') the maximum, or if equality is allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation.property.strictMinEnabled">strictMinEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether each value needs to be strictly greater than ('>') the minimum, or if equality is allowed. |

---

##### `maxValue`<sup>Optional</sup> <a name="maxValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation.property.maxValue"></a>

```typescript
public readonly maxValue: string;
```

- *Type:* string

The maximum column value allowed for a row to pass this validation.

At least one of minValue and maxValue need to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#max_value GoogleDataplexDatascan#max_value}

---

##### `minValue`<sup>Optional</sup> <a name="minValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation.property.minValue"></a>

```typescript
public readonly minValue: string;
```

- *Type:* string

The minimum column value allowed for a row to pass this validation.

At least one of minValue and maxValue need to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#min_value GoogleDataplexDatascan#min_value}

---

##### `strictMaxEnabled`<sup>Optional</sup> <a name="strictMaxEnabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation.property.strictMaxEnabled"></a>

```typescript
public readonly strictMaxEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether each value needs to be strictly lesser than ('<') the maximum, or if equality is allowed.

Only relevant if a maxValue has been defined. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#strict_max_enabled GoogleDataplexDatascan#strict_max_enabled}

---

##### `strictMinEnabled`<sup>Optional</sup> <a name="strictMinEnabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation.property.strictMinEnabled"></a>

```typescript
public readonly strictMinEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether each value needs to be strictly greater than ('>') the minimum, or if equality is allowed.

Only relevant if a minValue has been defined. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#strict_min_enabled GoogleDataplexDatascan#strict_min_enabled}

---

### GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation <a name="GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

const googleDataplexDatascanDataQualitySpecRulesRegexExpectation: googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation.property.regex">regex</a></code> | <code>string</code> | A regular expression the column value is expected to match. |

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

A regular expression the column value is expected to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#regex GoogleDataplexDatascan#regex}

---

### GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation <a name="GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

const googleDataplexDatascanDataQualitySpecRulesRowConditionExpectation: googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation.property.sqlExpression">sqlExpression</a></code> | <code>string</code> | The SQL expression. |

---

##### `sqlExpression`<sup>Required</sup> <a name="sqlExpression" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation.property.sqlExpression"></a>

```typescript
public readonly sqlExpression: string;
```

- *Type:* string

The SQL expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#sql_expression GoogleDataplexDatascan#sql_expression}

---

### GoogleDataplexDatascanDataQualitySpecRulesSetExpectation <a name="GoogleDataplexDatascanDataQualitySpecRulesSetExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

const googleDataplexDatascanDataQualitySpecRulesSetExpectation: googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation.property.values">values</a></code> | <code>string[]</code> | Expected values for the column value. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Expected values for the column value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#values GoogleDataplexDatascan#values}

---

### GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion <a name="GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

const googleDataplexDatascanDataQualitySpecRulesSqlAssertion: googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion.property.sqlStatement">sqlStatement</a></code> | <code>string</code> | The SQL statement. |

---

##### `sqlStatement`<sup>Required</sup> <a name="sqlStatement" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion.property.sqlStatement"></a>

```typescript
public readonly sqlStatement: string;
```

- *Type:* string

The SQL statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#sql_statement GoogleDataplexDatascan#sql_statement}

---

### GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation <a name="GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

const googleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation: googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.statistic">statistic</a></code> | <code>string</code> | column statistics. Possible values: ["STATISTIC_UNDEFINED", "MEAN", "MIN", "MAX"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.maxValue">maxValue</a></code> | <code>string</code> | The maximum column statistic value allowed for a row to pass this validation. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.minValue">minValue</a></code> | <code>string</code> | The minimum column statistic value allowed for a row to pass this validation. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.strictMaxEnabled">strictMaxEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether column statistic needs to be strictly lesser than ('<') the maximum, or if equality is allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.strictMinEnabled">strictMinEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether column statistic needs to be strictly greater than ('>') the minimum, or if equality is allowed. |

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

column statistics. Possible values: ["STATISTIC_UNDEFINED", "MEAN", "MIN", "MAX"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#statistic GoogleDataplexDatascan#statistic}

---

##### `maxValue`<sup>Optional</sup> <a name="maxValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.maxValue"></a>

```typescript
public readonly maxValue: string;
```

- *Type:* string

The maximum column statistic value allowed for a row to pass this validation.

At least one of minValue and maxValue need to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#max_value GoogleDataplexDatascan#max_value}

---

##### `minValue`<sup>Optional</sup> <a name="minValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.minValue"></a>

```typescript
public readonly minValue: string;
```

- *Type:* string

The minimum column statistic value allowed for a row to pass this validation.

At least one of minValue and maxValue need to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#min_value GoogleDataplexDatascan#min_value}

---

##### `strictMaxEnabled`<sup>Optional</sup> <a name="strictMaxEnabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.strictMaxEnabled"></a>

```typescript
public readonly strictMaxEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether column statistic needs to be strictly lesser than ('<') the maximum, or if equality is allowed.

Only relevant if a maxValue has been defined. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#strict_max_enabled GoogleDataplexDatascan#strict_max_enabled}

---

##### `strictMinEnabled`<sup>Optional</sup> <a name="strictMinEnabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.strictMinEnabled"></a>

```typescript
public readonly strictMinEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether column statistic needs to be strictly greater than ('>') the minimum, or if equality is allowed.

Only relevant if a minValue has been defined. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#strict_min_enabled GoogleDataplexDatascan#strict_min_enabled}

---

### GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation <a name="GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

const googleDataplexDatascanDataQualitySpecRulesTableConditionExpectation: googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation.property.sqlExpression">sqlExpression</a></code> | <code>string</code> | The SQL expression. |

---

##### `sqlExpression`<sup>Required</sup> <a name="sqlExpression" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation.property.sqlExpression"></a>

```typescript
public readonly sqlExpression: string;
```

- *Type:* string

The SQL expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#sql_expression GoogleDataplexDatascan#sql_expression}

---

### GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation <a name="GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

const googleDataplexDatascanDataQualitySpecRulesUniquenessExpectation: googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation = { ... }
```


### GoogleDataplexDatascanExecutionSpec <a name="GoogleDataplexDatascanExecutionSpec" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

const googleDataplexDatascanExecutionSpec: googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger">GoogleDataplexDatascanExecutionSpecTrigger</a></code> | trigger block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec.property.field">field</a></code> | <code>string</code> | The unnested field (of type Date or Timestamp) that contains values which monotonically increase over time. |

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec.property.trigger"></a>

```typescript
public readonly trigger: GoogleDataplexDatascanExecutionSpecTrigger;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger">GoogleDataplexDatascanExecutionSpecTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#trigger GoogleDataplexDatascan#trigger}

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

The unnested field (of type Date or Timestamp) that contains values which monotonically increase over time.

If not specified, a data scan will run for all data in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#field GoogleDataplexDatascan#field}

---

### GoogleDataplexDatascanExecutionSpecTrigger <a name="GoogleDataplexDatascanExecutionSpecTrigger" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

const googleDataplexDatascanExecutionSpecTrigger: googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger.property.onDemand">onDemand</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemand">GoogleDataplexDatascanExecutionSpecTriggerOnDemand</a></code> | on_demand block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule">GoogleDataplexDatascanExecutionSpecTriggerSchedule</a></code> | schedule block. |

---

##### `onDemand`<sup>Optional</sup> <a name="onDemand" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger.property.onDemand"></a>

```typescript
public readonly onDemand: GoogleDataplexDatascanExecutionSpecTriggerOnDemand;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemand">GoogleDataplexDatascanExecutionSpecTriggerOnDemand</a>

on_demand block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#on_demand GoogleDataplexDatascan#on_demand}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger.property.schedule"></a>

```typescript
public readonly schedule: GoogleDataplexDatascanExecutionSpecTriggerSchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule">GoogleDataplexDatascanExecutionSpecTriggerSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#schedule GoogleDataplexDatascan#schedule}

---

### GoogleDataplexDatascanExecutionSpecTriggerOnDemand <a name="GoogleDataplexDatascanExecutionSpecTriggerOnDemand" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemand"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemand.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

const googleDataplexDatascanExecutionSpecTriggerOnDemand: googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemand = { ... }
```


### GoogleDataplexDatascanExecutionSpecTriggerSchedule <a name="GoogleDataplexDatascanExecutionSpecTriggerSchedule" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

const googleDataplexDatascanExecutionSpecTriggerSchedule: googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule.property.cron">cron</a></code> | <code>string</code> | Cron schedule for running scans periodically. This field is required for Schedule scans. |

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule.property.cron"></a>

```typescript
public readonly cron: string;
```

- *Type:* string

Cron schedule for running scans periodically. This field is required for Schedule scans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#cron GoogleDataplexDatascan#cron}

---

### GoogleDataplexDatascanExecutionStatus <a name="GoogleDataplexDatascanExecutionStatus" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatus.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

const googleDataplexDatascanExecutionStatus: googleDataplexDatascan.GoogleDataplexDatascanExecutionStatus = { ... }
```


### GoogleDataplexDatascanTimeouts <a name="GoogleDataplexDatascanTimeouts" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

const googleDataplexDatascanTimeouts: googleDataplexDatascan.GoogleDataplexDatascanTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#create GoogleDataplexDatascan#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#delete GoogleDataplexDatascan#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#update GoogleDataplexDatascan#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#create GoogleDataplexDatascan#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#delete GoogleDataplexDatascan#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_datascan#update GoogleDataplexDatascan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataplexDatascanDataOutputReference <a name="GoogleDataplexDatascanDataOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

new googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.resetEntity">resetEntity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.resetResource">resetResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEntity` <a name="resetEntity" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.resetEntity"></a>

```typescript
public resetEntity(): void
```

##### `resetResource` <a name="resetResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.resetResource"></a>

```typescript
public resetResource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.entityInput">entityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.resourceInput">resourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.entity">entity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData">GoogleDataplexDatascanData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityInput`<sup>Optional</sup> <a name="entityInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.entityInput"></a>

```typescript
public readonly entityInput: string;
```

- *Type:* string

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.resourceInput"></a>

```typescript
public readonly resourceInput: string;
```

- *Type:* string

---

##### `entity`<sup>Required</sup> <a name="entity" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.entity"></a>

```typescript
public readonly entity: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexDatascanData;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanData">GoogleDataplexDatascanData</a>

---


### GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference <a name="GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

new googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.resetFieldNames">resetFieldNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFieldNames` <a name="resetFieldNames" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.resetFieldNames"></a>

```typescript
public resetFieldNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.fieldNamesInput">fieldNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.fieldNames">fieldNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields">GoogleDataplexDatascanDataProfileSpecExcludeFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldNamesInput`<sup>Optional</sup> <a name="fieldNamesInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.fieldNamesInput"></a>

```typescript
public readonly fieldNamesInput: string[];
```

- *Type:* string[]

---

##### `fieldNames`<sup>Required</sup> <a name="fieldNames" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.fieldNames"></a>

```typescript
public readonly fieldNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexDatascanDataProfileSpecExcludeFields;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields">GoogleDataplexDatascanDataProfileSpecExcludeFields</a>

---


### GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference <a name="GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

new googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.resetFieldNames">resetFieldNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFieldNames` <a name="resetFieldNames" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.resetFieldNames"></a>

```typescript
public resetFieldNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.fieldNamesInput">fieldNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.fieldNames">fieldNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields">GoogleDataplexDatascanDataProfileSpecIncludeFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldNamesInput`<sup>Optional</sup> <a name="fieldNamesInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.fieldNamesInput"></a>

```typescript
public readonly fieldNamesInput: string[];
```

- *Type:* string[]

---

##### `fieldNames`<sup>Required</sup> <a name="fieldNames" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.fieldNames"></a>

```typescript
public readonly fieldNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexDatascanDataProfileSpecIncludeFields;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields">GoogleDataplexDatascanDataProfileSpecIncludeFields</a>

---


### GoogleDataplexDatascanDataProfileSpecOutputReference <a name="GoogleDataplexDatascanDataProfileSpecOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

new googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.putExcludeFields">putExcludeFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.putIncludeFields">putIncludeFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.putPostScanActions">putPostScanActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resetExcludeFields">resetExcludeFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resetIncludeFields">resetIncludeFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resetPostScanActions">resetPostScanActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resetRowFilter">resetRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resetSamplingPercent">resetSamplingPercent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExcludeFields` <a name="putExcludeFields" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.putExcludeFields"></a>

```typescript
public putExcludeFields(value: GoogleDataplexDatascanDataProfileSpecExcludeFields): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.putExcludeFields.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields">GoogleDataplexDatascanDataProfileSpecExcludeFields</a>

---

##### `putIncludeFields` <a name="putIncludeFields" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.putIncludeFields"></a>

```typescript
public putIncludeFields(value: GoogleDataplexDatascanDataProfileSpecIncludeFields): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.putIncludeFields.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields">GoogleDataplexDatascanDataProfileSpecIncludeFields</a>

---

##### `putPostScanActions` <a name="putPostScanActions" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.putPostScanActions"></a>

```typescript
public putPostScanActions(value: GoogleDataplexDatascanDataProfileSpecPostScanActions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.putPostScanActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions">GoogleDataplexDatascanDataProfileSpecPostScanActions</a>

---

##### `resetExcludeFields` <a name="resetExcludeFields" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resetExcludeFields"></a>

```typescript
public resetExcludeFields(): void
```

##### `resetIncludeFields` <a name="resetIncludeFields" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resetIncludeFields"></a>

```typescript
public resetIncludeFields(): void
```

##### `resetPostScanActions` <a name="resetPostScanActions" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resetPostScanActions"></a>

```typescript
public resetPostScanActions(): void
```

##### `resetRowFilter` <a name="resetRowFilter" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resetRowFilter"></a>

```typescript
public resetRowFilter(): void
```

##### `resetSamplingPercent` <a name="resetSamplingPercent" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.resetSamplingPercent"></a>

```typescript
public resetSamplingPercent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.excludeFields">excludeFields</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference">GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.includeFields">includeFields</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference">GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.postScanActions">postScanActions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference">GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.excludeFieldsInput">excludeFieldsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields">GoogleDataplexDatascanDataProfileSpecExcludeFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.includeFieldsInput">includeFieldsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields">GoogleDataplexDatascanDataProfileSpecIncludeFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.postScanActionsInput">postScanActionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions">GoogleDataplexDatascanDataProfileSpecPostScanActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.rowFilterInput">rowFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.samplingPercentInput">samplingPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.rowFilter">rowFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.samplingPercent">samplingPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec">GoogleDataplexDatascanDataProfileSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludeFields`<sup>Required</sup> <a name="excludeFields" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.excludeFields"></a>

```typescript
public readonly excludeFields: GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference">GoogleDataplexDatascanDataProfileSpecExcludeFieldsOutputReference</a>

---

##### `includeFields`<sup>Required</sup> <a name="includeFields" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.includeFields"></a>

```typescript
public readonly includeFields: GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference">GoogleDataplexDatascanDataProfileSpecIncludeFieldsOutputReference</a>

---

##### `postScanActions`<sup>Required</sup> <a name="postScanActions" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.postScanActions"></a>

```typescript
public readonly postScanActions: GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference">GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference</a>

---

##### `excludeFieldsInput`<sup>Optional</sup> <a name="excludeFieldsInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.excludeFieldsInput"></a>

```typescript
public readonly excludeFieldsInput: GoogleDataplexDatascanDataProfileSpecExcludeFields;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecExcludeFields">GoogleDataplexDatascanDataProfileSpecExcludeFields</a>

---

##### `includeFieldsInput`<sup>Optional</sup> <a name="includeFieldsInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.includeFieldsInput"></a>

```typescript
public readonly includeFieldsInput: GoogleDataplexDatascanDataProfileSpecIncludeFields;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecIncludeFields">GoogleDataplexDatascanDataProfileSpecIncludeFields</a>

---

##### `postScanActionsInput`<sup>Optional</sup> <a name="postScanActionsInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.postScanActionsInput"></a>

```typescript
public readonly postScanActionsInput: GoogleDataplexDatascanDataProfileSpecPostScanActions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions">GoogleDataplexDatascanDataProfileSpecPostScanActions</a>

---

##### `rowFilterInput`<sup>Optional</sup> <a name="rowFilterInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.rowFilterInput"></a>

```typescript
public readonly rowFilterInput: string;
```

- *Type:* string

---

##### `samplingPercentInput`<sup>Optional</sup> <a name="samplingPercentInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.samplingPercentInput"></a>

```typescript
public readonly samplingPercentInput: number;
```

- *Type:* number

---

##### `rowFilter`<sup>Required</sup> <a name="rowFilter" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.rowFilter"></a>

```typescript
public readonly rowFilter: string;
```

- *Type:* string

---

##### `samplingPercent`<sup>Required</sup> <a name="samplingPercent" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.samplingPercent"></a>

```typescript
public readonly samplingPercent: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexDatascanDataProfileSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpec">GoogleDataplexDatascanDataProfileSpec</a>

---


### GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference <a name="GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

new googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.resetResultsTable">resetResultsTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResultsTable` <a name="resetResultsTable" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.resetResultsTable"></a>

```typescript
public resetResultsTable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.resultsTableInput">resultsTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.resultsTable">resultsTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resultsTableInput`<sup>Optional</sup> <a name="resultsTableInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.resultsTableInput"></a>

```typescript
public readonly resultsTableInput: string;
```

- *Type:* string

---

##### `resultsTable`<sup>Required</sup> <a name="resultsTable" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.resultsTable"></a>

```typescript
public readonly resultsTable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a>

---


### GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference <a name="GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

new googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.putBigqueryExport">putBigqueryExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.resetBigqueryExport">resetBigqueryExport</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBigqueryExport` <a name="putBigqueryExport" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.putBigqueryExport"></a>

```typescript
public putBigqueryExport(value: GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.putBigqueryExport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a>

---

##### `resetBigqueryExport` <a name="resetBigqueryExport" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.resetBigqueryExport"></a>

```typescript
public resetBigqueryExport(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.bigqueryExport">bigqueryExport</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference">GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.bigqueryExportInput">bigqueryExportInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions">GoogleDataplexDatascanDataProfileSpecPostScanActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bigqueryExport`<sup>Required</sup> <a name="bigqueryExport" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.bigqueryExport"></a>

```typescript
public readonly bigqueryExport: GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference">GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference</a>

---

##### `bigqueryExportInput`<sup>Optional</sup> <a name="bigqueryExportInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.bigqueryExportInput"></a>

```typescript
public readonly bigqueryExportInput: GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexDatascanDataProfileSpecPostScanActions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataProfileSpecPostScanActions">GoogleDataplexDatascanDataProfileSpecPostScanActions</a>

---


### GoogleDataplexDatascanDataQualitySpecOutputReference <a name="GoogleDataplexDatascanDataQualitySpecOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

new googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.putPostScanActions">putPostScanActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resetPostScanActions">resetPostScanActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resetRowFilter">resetRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resetRules">resetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resetSamplingPercent">resetSamplingPercent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPostScanActions` <a name="putPostScanActions" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.putPostScanActions"></a>

```typescript
public putPostScanActions(value: GoogleDataplexDatascanDataQualitySpecPostScanActions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.putPostScanActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions">GoogleDataplexDatascanDataQualitySpecPostScanActions</a>

---

##### `putRules` <a name="putRules" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.putRules"></a>

```typescript
public putRules(value: IResolvable | GoogleDataplexDatascanDataQualitySpecRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.putRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules">GoogleDataplexDatascanDataQualitySpecRules</a>[]

---

##### `resetPostScanActions` <a name="resetPostScanActions" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resetPostScanActions"></a>

```typescript
public resetPostScanActions(): void
```

##### `resetRowFilter` <a name="resetRowFilter" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resetRowFilter"></a>

```typescript
public resetRowFilter(): void
```

##### `resetRules` <a name="resetRules" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resetRules"></a>

```typescript
public resetRules(): void
```

##### `resetSamplingPercent` <a name="resetSamplingPercent" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.resetSamplingPercent"></a>

```typescript
public resetSamplingPercent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.postScanActions">postScanActions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference">GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList">GoogleDataplexDatascanDataQualitySpecRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.postScanActionsInput">postScanActionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions">GoogleDataplexDatascanDataQualitySpecPostScanActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.rowFilterInput">rowFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.rulesInput">rulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules">GoogleDataplexDatascanDataQualitySpecRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.samplingPercentInput">samplingPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.rowFilter">rowFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.samplingPercent">samplingPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec">GoogleDataplexDatascanDataQualitySpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `postScanActions`<sup>Required</sup> <a name="postScanActions" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.postScanActions"></a>

```typescript
public readonly postScanActions: GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference">GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.rules"></a>

```typescript
public readonly rules: GoogleDataplexDatascanDataQualitySpecRulesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList">GoogleDataplexDatascanDataQualitySpecRulesList</a>

---

##### `postScanActionsInput`<sup>Optional</sup> <a name="postScanActionsInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.postScanActionsInput"></a>

```typescript
public readonly postScanActionsInput: GoogleDataplexDatascanDataQualitySpecPostScanActions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions">GoogleDataplexDatascanDataQualitySpecPostScanActions</a>

---

##### `rowFilterInput`<sup>Optional</sup> <a name="rowFilterInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.rowFilterInput"></a>

```typescript
public readonly rowFilterInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | GoogleDataplexDatascanDataQualitySpecRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules">GoogleDataplexDatascanDataQualitySpecRules</a>[]

---

##### `samplingPercentInput`<sup>Optional</sup> <a name="samplingPercentInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.samplingPercentInput"></a>

```typescript
public readonly samplingPercentInput: number;
```

- *Type:* number

---

##### `rowFilter`<sup>Required</sup> <a name="rowFilter" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.rowFilter"></a>

```typescript
public readonly rowFilter: string;
```

- *Type:* string

---

##### `samplingPercent`<sup>Required</sup> <a name="samplingPercent" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.samplingPercent"></a>

```typescript
public readonly samplingPercent: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexDatascanDataQualitySpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpec">GoogleDataplexDatascanDataQualitySpec</a>

---


### GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference <a name="GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

new googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.resetResultsTable">resetResultsTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResultsTable` <a name="resetResultsTable" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.resetResultsTable"></a>

```typescript
public resetResultsTable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.resultsTableInput">resultsTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.resultsTable">resultsTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resultsTableInput`<sup>Optional</sup> <a name="resultsTableInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.resultsTableInput"></a>

```typescript
public readonly resultsTableInput: string;
```

- *Type:* string

---

##### `resultsTable`<sup>Required</sup> <a name="resultsTable" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.resultsTable"></a>

```typescript
public readonly resultsTable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a>

---


### GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference <a name="GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

new googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.putBigqueryExport">putBigqueryExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.resetBigqueryExport">resetBigqueryExport</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBigqueryExport` <a name="putBigqueryExport" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.putBigqueryExport"></a>

```typescript
public putBigqueryExport(value: GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.putBigqueryExport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a>

---

##### `resetBigqueryExport` <a name="resetBigqueryExport" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.resetBigqueryExport"></a>

```typescript
public resetBigqueryExport(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.bigqueryExport">bigqueryExport</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference">GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.bigqueryExportInput">bigqueryExportInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions">GoogleDataplexDatascanDataQualitySpecPostScanActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bigqueryExport`<sup>Required</sup> <a name="bigqueryExport" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.bigqueryExport"></a>

```typescript
public readonly bigqueryExport: GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference">GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference</a>

---

##### `bigqueryExportInput`<sup>Optional</sup> <a name="bigqueryExportInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.bigqueryExportInput"></a>

```typescript
public readonly bigqueryExportInput: GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">GoogleDataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexDatascanDataQualitySpecPostScanActions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecPostScanActions">GoogleDataplexDatascanDataQualitySpecPostScanActions</a>

---


### GoogleDataplexDatascanDataQualitySpecRulesList <a name="GoogleDataplexDatascanDataQualitySpecRulesList" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

new googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.get"></a>

```typescript
public get(index: number): GoogleDataplexDatascanDataQualitySpecRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules">GoogleDataplexDatascanDataQualitySpecRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataplexDatascanDataQualitySpecRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules">GoogleDataplexDatascanDataQualitySpecRules</a>[]

---


### GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference <a name="GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

new googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation">GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation">GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation</a>

---


### GoogleDataplexDatascanDataQualitySpecRulesOutputReference <a name="GoogleDataplexDatascanDataQualitySpecRulesOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

new googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putNonNullExpectation">putNonNullExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putRangeExpectation">putRangeExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putRegexExpectation">putRegexExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putRowConditionExpectation">putRowConditionExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putSetExpectation">putSetExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putSqlAssertion">putSqlAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putStatisticRangeExpectation">putStatisticRangeExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putTableConditionExpectation">putTableConditionExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putUniquenessExpectation">putUniquenessExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetColumn">resetColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetIgnoreNull">resetIgnoreNull</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetNonNullExpectation">resetNonNullExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetRangeExpectation">resetRangeExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetRegexExpectation">resetRegexExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetRowConditionExpectation">resetRowConditionExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetSetExpectation">resetSetExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetSqlAssertion">resetSqlAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetStatisticRangeExpectation">resetStatisticRangeExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetTableConditionExpectation">resetTableConditionExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetUniquenessExpectation">resetUniquenessExpectation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNonNullExpectation` <a name="putNonNullExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putNonNullExpectation"></a>

```typescript
public putNonNullExpectation(value: GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putNonNullExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation">GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation</a>

---

##### `putRangeExpectation` <a name="putRangeExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putRangeExpectation"></a>

```typescript
public putRangeExpectation(value: GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putRangeExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation</a>

---

##### `putRegexExpectation` <a name="putRegexExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putRegexExpectation"></a>

```typescript
public putRegexExpectation(value: GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putRegexExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation">GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation</a>

---

##### `putRowConditionExpectation` <a name="putRowConditionExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putRowConditionExpectation"></a>

```typescript
public putRowConditionExpectation(value: GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putRowConditionExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation</a>

---

##### `putSetExpectation` <a name="putSetExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putSetExpectation"></a>

```typescript
public putSetExpectation(value: GoogleDataplexDatascanDataQualitySpecRulesSetExpectation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putSetExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation">GoogleDataplexDatascanDataQualitySpecRulesSetExpectation</a>

---

##### `putSqlAssertion` <a name="putSqlAssertion" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putSqlAssertion"></a>

```typescript
public putSqlAssertion(value: GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putSqlAssertion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion">GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion</a>

---

##### `putStatisticRangeExpectation` <a name="putStatisticRangeExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putStatisticRangeExpectation"></a>

```typescript
public putStatisticRangeExpectation(value: GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putStatisticRangeExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a>

---

##### `putTableConditionExpectation` <a name="putTableConditionExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putTableConditionExpectation"></a>

```typescript
public putTableConditionExpectation(value: GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putTableConditionExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation</a>

---

##### `putUniquenessExpectation` <a name="putUniquenessExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putUniquenessExpectation"></a>

```typescript
public putUniquenessExpectation(value: GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.putUniquenessExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation">GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation</a>

---

##### `resetColumn` <a name="resetColumn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetColumn"></a>

```typescript
public resetColumn(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetIgnoreNull` <a name="resetIgnoreNull" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetIgnoreNull"></a>

```typescript
public resetIgnoreNull(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNonNullExpectation` <a name="resetNonNullExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetNonNullExpectation"></a>

```typescript
public resetNonNullExpectation(): void
```

##### `resetRangeExpectation` <a name="resetRangeExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetRangeExpectation"></a>

```typescript
public resetRangeExpectation(): void
```

##### `resetRegexExpectation` <a name="resetRegexExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetRegexExpectation"></a>

```typescript
public resetRegexExpectation(): void
```

##### `resetRowConditionExpectation` <a name="resetRowConditionExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetRowConditionExpectation"></a>

```typescript
public resetRowConditionExpectation(): void
```

##### `resetSetExpectation` <a name="resetSetExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetSetExpectation"></a>

```typescript
public resetSetExpectation(): void
```

##### `resetSqlAssertion` <a name="resetSqlAssertion" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetSqlAssertion"></a>

```typescript
public resetSqlAssertion(): void
```

##### `resetStatisticRangeExpectation` <a name="resetStatisticRangeExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetStatisticRangeExpectation"></a>

```typescript
public resetStatisticRangeExpectation(): void
```

##### `resetTableConditionExpectation` <a name="resetTableConditionExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetTableConditionExpectation"></a>

```typescript
public resetTableConditionExpectation(): void
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetThreshold"></a>

```typescript
public resetThreshold(): void
```

##### `resetUniquenessExpectation` <a name="resetUniquenessExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.resetUniquenessExpectation"></a>

```typescript
public resetUniquenessExpectation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.nonNullExpectation">nonNullExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.rangeExpectation">rangeExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.regexExpectation">regexExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.rowConditionExpectation">rowConditionExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.setExpectation">setExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.sqlAssertion">sqlAssertion</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference">GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.statisticRangeExpectation">statisticRangeExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.tableConditionExpectation">tableConditionExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.uniquenessExpectation">uniquenessExpectation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.columnInput">columnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.dimensionInput">dimensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.ignoreNullInput">ignoreNullInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.nonNullExpectationInput">nonNullExpectationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation">GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.rangeExpectationInput">rangeExpectationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.regexExpectationInput">regexExpectationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation">GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.rowConditionExpectationInput">rowConditionExpectationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.setExpectationInput">setExpectationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation">GoogleDataplexDatascanDataQualitySpecRulesSetExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.sqlAssertionInput">sqlAssertionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion">GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.statisticRangeExpectationInput">statisticRangeExpectationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.tableConditionExpectationInput">tableConditionExpectationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.uniquenessExpectationInput">uniquenessExpectationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation">GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.column">column</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.dimension">dimension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.ignoreNull">ignoreNull</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules">GoogleDataplexDatascanDataQualitySpecRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nonNullExpectation`<sup>Required</sup> <a name="nonNullExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.nonNullExpectation"></a>

```typescript
public readonly nonNullExpectation: GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference</a>

---

##### `rangeExpectation`<sup>Required</sup> <a name="rangeExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.rangeExpectation"></a>

```typescript
public readonly rangeExpectation: GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference</a>

---

##### `regexExpectation`<sup>Required</sup> <a name="regexExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.regexExpectation"></a>

```typescript
public readonly regexExpectation: GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference</a>

---

##### `rowConditionExpectation`<sup>Required</sup> <a name="rowConditionExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.rowConditionExpectation"></a>

```typescript
public readonly rowConditionExpectation: GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference</a>

---

##### `setExpectation`<sup>Required</sup> <a name="setExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.setExpectation"></a>

```typescript
public readonly setExpectation: GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference</a>

---

##### `sqlAssertion`<sup>Required</sup> <a name="sqlAssertion" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.sqlAssertion"></a>

```typescript
public readonly sqlAssertion: GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference">GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference</a>

---

##### `statisticRangeExpectation`<sup>Required</sup> <a name="statisticRangeExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.statisticRangeExpectation"></a>

```typescript
public readonly statisticRangeExpectation: GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference</a>

---

##### `tableConditionExpectation`<sup>Required</sup> <a name="tableConditionExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.tableConditionExpectation"></a>

```typescript
public readonly tableConditionExpectation: GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference</a>

---

##### `uniquenessExpectation`<sup>Required</sup> <a name="uniquenessExpectation" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.uniquenessExpectation"></a>

```typescript
public readonly uniquenessExpectation: GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference">GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference</a>

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.dimensionInput"></a>

```typescript
public readonly dimensionInput: string;
```

- *Type:* string

---

##### `ignoreNullInput`<sup>Optional</sup> <a name="ignoreNullInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.ignoreNullInput"></a>

```typescript
public readonly ignoreNullInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nonNullExpectationInput`<sup>Optional</sup> <a name="nonNullExpectationInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.nonNullExpectationInput"></a>

```typescript
public readonly nonNullExpectationInput: GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation">GoogleDataplexDatascanDataQualitySpecRulesNonNullExpectation</a>

---

##### `rangeExpectationInput`<sup>Optional</sup> <a name="rangeExpectationInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.rangeExpectationInput"></a>

```typescript
public readonly rangeExpectationInput: GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation</a>

---

##### `regexExpectationInput`<sup>Optional</sup> <a name="regexExpectationInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.regexExpectationInput"></a>

```typescript
public readonly regexExpectationInput: GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation">GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation</a>

---

##### `rowConditionExpectationInput`<sup>Optional</sup> <a name="rowConditionExpectationInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.rowConditionExpectationInput"></a>

```typescript
public readonly rowConditionExpectationInput: GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation</a>

---

##### `setExpectationInput`<sup>Optional</sup> <a name="setExpectationInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.setExpectationInput"></a>

```typescript
public readonly setExpectationInput: GoogleDataplexDatascanDataQualitySpecRulesSetExpectation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation">GoogleDataplexDatascanDataQualitySpecRulesSetExpectation</a>

---

##### `sqlAssertionInput`<sup>Optional</sup> <a name="sqlAssertionInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.sqlAssertionInput"></a>

```typescript
public readonly sqlAssertionInput: GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion">GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion</a>

---

##### `statisticRangeExpectationInput`<sup>Optional</sup> <a name="statisticRangeExpectationInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.statisticRangeExpectationInput"></a>

```typescript
public readonly statisticRangeExpectationInput: GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a>

---

##### `tableConditionExpectationInput`<sup>Optional</sup> <a name="tableConditionExpectationInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.tableConditionExpectationInput"></a>

```typescript
public readonly tableConditionExpectationInput: GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation</a>

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `uniquenessExpectationInput`<sup>Optional</sup> <a name="uniquenessExpectationInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.uniquenessExpectationInput"></a>

```typescript
public readonly uniquenessExpectationInput: GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation">GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation</a>

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.column"></a>

```typescript
public readonly column: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.dimension"></a>

```typescript
public readonly dimension: string;
```

- *Type:* string

---

##### `ignoreNull`<sup>Required</sup> <a name="ignoreNull" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.ignoreNull"></a>

```typescript
public readonly ignoreNull: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataplexDatascanDataQualitySpecRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRules">GoogleDataplexDatascanDataQualitySpecRules</a>

---


### GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference <a name="GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

new googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetMaxValue">resetMaxValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetMinValue">resetMinValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetStrictMaxEnabled">resetStrictMaxEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetStrictMinEnabled">resetStrictMinEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxValue` <a name="resetMaxValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetMaxValue"></a>

```typescript
public resetMaxValue(): void
```

##### `resetMinValue` <a name="resetMinValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetMinValue"></a>

```typescript
public resetMinValue(): void
```

##### `resetStrictMaxEnabled` <a name="resetStrictMaxEnabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetStrictMaxEnabled"></a>

```typescript
public resetStrictMaxEnabled(): void
```

##### `resetStrictMinEnabled` <a name="resetStrictMinEnabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetStrictMinEnabled"></a>

```typescript
public resetStrictMinEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.maxValueInput">maxValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.minValueInput">minValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMaxEnabledInput">strictMaxEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMinEnabledInput">strictMinEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.maxValue">maxValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.minValue">minValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMaxEnabled">strictMaxEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMinEnabled">strictMinEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxValueInput`<sup>Optional</sup> <a name="maxValueInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.maxValueInput"></a>

```typescript
public readonly maxValueInput: string;
```

- *Type:* string

---

##### `minValueInput`<sup>Optional</sup> <a name="minValueInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.minValueInput"></a>

```typescript
public readonly minValueInput: string;
```

- *Type:* string

---

##### `strictMaxEnabledInput`<sup>Optional</sup> <a name="strictMaxEnabledInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMaxEnabledInput"></a>

```typescript
public readonly strictMaxEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `strictMinEnabledInput`<sup>Optional</sup> <a name="strictMinEnabledInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMinEnabledInput"></a>

```typescript
public readonly strictMinEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxValue`<sup>Required</sup> <a name="maxValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.maxValue"></a>

```typescript
public readonly maxValue: string;
```

- *Type:* string

---

##### `minValue`<sup>Required</sup> <a name="minValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.minValue"></a>

```typescript
public readonly minValue: string;
```

- *Type:* string

---

##### `strictMaxEnabled`<sup>Required</sup> <a name="strictMaxEnabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMaxEnabled"></a>

```typescript
public readonly strictMaxEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `strictMinEnabled`<sup>Required</sup> <a name="strictMinEnabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMinEnabled"></a>

```typescript
public readonly strictMinEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesRangeExpectation</a>

---


### GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference <a name="GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

new googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.regexInput">regexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation">GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation">GoogleDataplexDatascanDataQualitySpecRulesRegexExpectation</a>

---


### GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference <a name="GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

new googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.sqlExpressionInput">sqlExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.sqlExpression">sqlExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sqlExpressionInput`<sup>Optional</sup> <a name="sqlExpressionInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.sqlExpressionInput"></a>

```typescript
public readonly sqlExpressionInput: string;
```

- *Type:* string

---

##### `sqlExpression`<sup>Required</sup> <a name="sqlExpression" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.sqlExpression"></a>

```typescript
public readonly sqlExpression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesRowConditionExpectation</a>

---


### GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference <a name="GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

new googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation">GoogleDataplexDatascanDataQualitySpecRulesSetExpectation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexDatascanDataQualitySpecRulesSetExpectation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSetExpectation">GoogleDataplexDatascanDataQualitySpecRulesSetExpectation</a>

---


### GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference <a name="GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

new googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.sqlStatementInput">sqlStatementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.sqlStatement">sqlStatement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion">GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sqlStatementInput`<sup>Optional</sup> <a name="sqlStatementInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.sqlStatementInput"></a>

```typescript
public readonly sqlStatementInput: string;
```

- *Type:* string

---

##### `sqlStatement`<sup>Required</sup> <a name="sqlStatement" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.sqlStatement"></a>

```typescript
public readonly sqlStatement: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion">GoogleDataplexDatascanDataQualitySpecRulesSqlAssertion</a>

---


### GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference <a name="GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

new googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetMaxValue">resetMaxValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetMinValue">resetMinValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetStrictMaxEnabled">resetStrictMaxEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetStrictMinEnabled">resetStrictMinEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxValue` <a name="resetMaxValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetMaxValue"></a>

```typescript
public resetMaxValue(): void
```

##### `resetMinValue` <a name="resetMinValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetMinValue"></a>

```typescript
public resetMinValue(): void
```

##### `resetStrictMaxEnabled` <a name="resetStrictMaxEnabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetStrictMaxEnabled"></a>

```typescript
public resetStrictMaxEnabled(): void
```

##### `resetStrictMinEnabled` <a name="resetStrictMinEnabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetStrictMinEnabled"></a>

```typescript
public resetStrictMinEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.maxValueInput">maxValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.minValueInput">minValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.statisticInput">statisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMaxEnabledInput">strictMaxEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMinEnabledInput">strictMinEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.maxValue">maxValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.minValue">minValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMaxEnabled">strictMaxEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMinEnabled">strictMinEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxValueInput`<sup>Optional</sup> <a name="maxValueInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.maxValueInput"></a>

```typescript
public readonly maxValueInput: string;
```

- *Type:* string

---

##### `minValueInput`<sup>Optional</sup> <a name="minValueInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.minValueInput"></a>

```typescript
public readonly minValueInput: string;
```

- *Type:* string

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.statisticInput"></a>

```typescript
public readonly statisticInput: string;
```

- *Type:* string

---

##### `strictMaxEnabledInput`<sup>Optional</sup> <a name="strictMaxEnabledInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMaxEnabledInput"></a>

```typescript
public readonly strictMaxEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `strictMinEnabledInput`<sup>Optional</sup> <a name="strictMinEnabledInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMinEnabledInput"></a>

```typescript
public readonly strictMinEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxValue`<sup>Required</sup> <a name="maxValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.maxValue"></a>

```typescript
public readonly maxValue: string;
```

- *Type:* string

---

##### `minValue`<sup>Required</sup> <a name="minValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.minValue"></a>

```typescript
public readonly minValue: string;
```

- *Type:* string

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `strictMaxEnabled`<sup>Required</sup> <a name="strictMaxEnabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMaxEnabled"></a>

```typescript
public readonly strictMaxEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `strictMinEnabled`<sup>Required</sup> <a name="strictMinEnabled" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMinEnabled"></a>

```typescript
public readonly strictMinEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">GoogleDataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a>

---


### GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference <a name="GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

new googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.sqlExpressionInput">sqlExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.sqlExpression">sqlExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sqlExpressionInput`<sup>Optional</sup> <a name="sqlExpressionInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.sqlExpressionInput"></a>

```typescript
public readonly sqlExpressionInput: string;
```

- *Type:* string

---

##### `sqlExpression`<sup>Required</sup> <a name="sqlExpression" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.sqlExpression"></a>

```typescript
public readonly sqlExpression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation">GoogleDataplexDatascanDataQualitySpecRulesTableConditionExpectation</a>

---


### GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference <a name="GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

new googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation">GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation">GoogleDataplexDatascanDataQualitySpecRulesUniquenessExpectation</a>

---


### GoogleDataplexDatascanExecutionSpecOutputReference <a name="GoogleDataplexDatascanExecutionSpecOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

new googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.putTrigger">putTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.resetField">resetField</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTrigger` <a name="putTrigger" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.putTrigger"></a>

```typescript
public putTrigger(value: GoogleDataplexDatascanExecutionSpecTrigger): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.putTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger">GoogleDataplexDatascanExecutionSpecTrigger</a>

---

##### `resetField` <a name="resetField" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.resetField"></a>

```typescript
public resetField(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference">GoogleDataplexDatascanExecutionSpecTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.triggerInput">triggerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger">GoogleDataplexDatascanExecutionSpecTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec">GoogleDataplexDatascanExecutionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.trigger"></a>

```typescript
public readonly trigger: GoogleDataplexDatascanExecutionSpecTriggerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference">GoogleDataplexDatascanExecutionSpecTriggerOutputReference</a>

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `triggerInput`<sup>Optional</sup> <a name="triggerInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.triggerInput"></a>

```typescript
public readonly triggerInput: GoogleDataplexDatascanExecutionSpecTrigger;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger">GoogleDataplexDatascanExecutionSpecTrigger</a>

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexDatascanExecutionSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpec">GoogleDataplexDatascanExecutionSpec</a>

---


### GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference <a name="GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

new googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemand">GoogleDataplexDatascanExecutionSpecTriggerOnDemand</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexDatascanExecutionSpecTriggerOnDemand;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemand">GoogleDataplexDatascanExecutionSpecTriggerOnDemand</a>

---


### GoogleDataplexDatascanExecutionSpecTriggerOutputReference <a name="GoogleDataplexDatascanExecutionSpecTriggerOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

new googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.putOnDemand">putOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.resetOnDemand">resetOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOnDemand` <a name="putOnDemand" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.putOnDemand"></a>

```typescript
public putOnDemand(value: GoogleDataplexDatascanExecutionSpecTriggerOnDemand): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.putOnDemand.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemand">GoogleDataplexDatascanExecutionSpecTriggerOnDemand</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.putSchedule"></a>

```typescript
public putSchedule(value: GoogleDataplexDatascanExecutionSpecTriggerSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule">GoogleDataplexDatascanExecutionSpecTriggerSchedule</a>

---

##### `resetOnDemand` <a name="resetOnDemand" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.resetOnDemand"></a>

```typescript
public resetOnDemand(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.resetSchedule"></a>

```typescript
public resetSchedule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.onDemand">onDemand</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference">GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference">GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.onDemandInput">onDemandInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemand">GoogleDataplexDatascanExecutionSpecTriggerOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule">GoogleDataplexDatascanExecutionSpecTriggerSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger">GoogleDataplexDatascanExecutionSpecTrigger</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `onDemand`<sup>Required</sup> <a name="onDemand" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.onDemand"></a>

```typescript
public readonly onDemand: GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference">GoogleDataplexDatascanExecutionSpecTriggerOnDemandOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.schedule"></a>

```typescript
public readonly schedule: GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference">GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference</a>

---

##### `onDemandInput`<sup>Optional</sup> <a name="onDemandInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.onDemandInput"></a>

```typescript
public readonly onDemandInput: GoogleDataplexDatascanExecutionSpecTriggerOnDemand;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOnDemand">GoogleDataplexDatascanExecutionSpecTriggerOnDemand</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: GoogleDataplexDatascanExecutionSpecTriggerSchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule">GoogleDataplexDatascanExecutionSpecTriggerSchedule</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexDatascanExecutionSpecTrigger;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTrigger">GoogleDataplexDatascanExecutionSpecTrigger</a>

---


### GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference <a name="GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

new googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.cronInput">cronInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.cron">cron</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule">GoogleDataplexDatascanExecutionSpecTriggerSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cronInput`<sup>Optional</sup> <a name="cronInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.cronInput"></a>

```typescript
public readonly cronInput: string;
```

- *Type:* string

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.cron"></a>

```typescript
public readonly cron: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexDatascanExecutionSpecTriggerSchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionSpecTriggerSchedule">GoogleDataplexDatascanExecutionSpecTriggerSchedule</a>

---


### GoogleDataplexDatascanExecutionStatusList <a name="GoogleDataplexDatascanExecutionStatusList" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

new googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.get"></a>

```typescript
public get(index: number): GoogleDataplexDatascanExecutionStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleDataplexDatascanExecutionStatusOutputReference <a name="GoogleDataplexDatascanExecutionStatusOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

new googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.property.latestJobEndTime">latestJobEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.property.latestJobStartTime">latestJobStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatus">GoogleDataplexDatascanExecutionStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `latestJobEndTime`<sup>Required</sup> <a name="latestJobEndTime" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.property.latestJobEndTime"></a>

```typescript
public readonly latestJobEndTime: string;
```

- *Type:* string

---

##### `latestJobStartTime`<sup>Required</sup> <a name="latestJobStartTime" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.property.latestJobStartTime"></a>

```typescript
public readonly latestJobStartTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataplexDatascanExecutionStatus;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanExecutionStatus">GoogleDataplexDatascanExecutionStatus</a>

---


### GoogleDataplexDatascanTimeoutsOutputReference <a name="GoogleDataplexDatascanTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDataplexDatascan } from '@cdktf/provider-google-beta'

new googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts">GoogleDataplexDatascanTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataplexDatascanTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataplexDatascan.GoogleDataplexDatascanTimeouts">GoogleDataplexDatascanTimeouts</a>

---



